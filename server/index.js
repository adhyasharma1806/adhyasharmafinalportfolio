import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors({ origin: true }));
app.use(express.json());

const requiredEnvKeys = ['EMAIL_HOST', 'EMAIL_PORT', 'EMAIL_USER', 'EMAIL_PASS', 'EMAIL_TO'];

const missingEnvKeys = requiredEnvKeys.filter((key) => !process.env[key]);
if (missingEnvKeys.length > 0) {
  console.error(`Missing environment variables: ${missingEnvKeys.join(', ')}`);
  console.error('Please copy .env.example to .env and fill those values before running the server.');
  process.exit(1);
}

const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_TO = process.env.EMAIL_TO;

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: Number(EMAIL_PORT),
  secure: Number(EMAIL_PORT) === 465,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields (name, email, subject, message) are required.' });
    }

    const mailOptions = {
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: `[Portfolio Contact] ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br />${message.replace(/\n/g, '<br />')}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Email send error:', error);

    return res.status(500).json({
      error: 'Failed to send email. Please try again later.',
      details: error instanceof Error ? error.message : String(error),
    });
  }
});

app.get('/api/health', (_, res) => {
  res.json({ status: 'ok' });
});

const PORT = Number(process.env.BACKEND_PORT) || 3001;

transporter.verify().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Backend email server running on http://localhost:${PORT}`);
  });

  server.on('error', (err) => {
    const code = err && (err).code ? (err).code : null;

    if (code === 'EADDRINUSE') {
      console.error(`Backend port ${PORT} already in use. Use BACKEND_PORT=xxxx or stop the other process.`);
    } else {
      console.error('Backend failed to start:', err);
    }
    process.exit(1);
  });
}).catch((err) => {
  console.error('Email transporter verify failed:', err);
  console.error('Check your SMTP settings in .env (EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS).');
  process.exit(1);
});


