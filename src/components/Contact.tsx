import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import MagneticWrapper from './MagneticWrapper';

const API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const { toast } = useToast();
  const headRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const sideRef = useRef<HTMLDivElement>(null);

  const headVisible = useInView(headRef, { once: true, margin: '-80px' });
  const formVisible = useInView(formRef, { once: true, margin: '-60px' });
  const sideVisible = useInView(sideRef, { once: true, margin: '-60px' });

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        const details = data?.details ? ` (${data.details})` : '';
        throw new Error((data?.error || 'Failed to send message') + details);
      }
      toast({ title: 'Message sent!', description: 'Your message was delivered successfully. I will respond as soon as I can.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      toast({ title: 'Send failed', description: `Could not send your message: ${error.message || error}`, variant: 'destructive' });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'adhyasharma1806@gmail.com', href: 'mailto:adhyasharma1806@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9797892021', href: 'tel:+919797892021' },
    { icon: MapPin, label: 'Location', value: 'NCR, India', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/adhya-sharma-584984284/' },
    { icon: ExternalLink, label: 'Instagram', href: 'https://www.instagram.com/adhyas.mp3?igsh=MWJoOGdrcmYzMWFqdA%3D%3D&utm_source=qr' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/adhyasharma1806' },
  ];

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focusedField === field ? 'hsl(24 8% 14%)' : 'hsl(30 12% 80%)'}`,
    borderRadius: 0,
    padding: '12px 0',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.9rem',
    color: 'hsl(24 8% 12%)',
    outline: 'none',
    transition: 'border-color 0.25s ease',
    caretColor: 'hsl(24 8% 14%)',
  });

  return (
    <section id="contact" style={{ background: 'hsl(36 20% 97%)', position: 'relative' }}>
      <div style={{ borderTop: '1px solid hsl(30 12% 84%)' }} />

      {/* Header */}
      <motion.div
        ref={headRef}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 48px 60px', display: 'flex', alignItems: 'baseline', gap: '24px' }}
        initial={{ opacity: 0, y: 24 }}
        animate={headVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-number">— 05</span>
        <div>
          <h2 className="display-md">Get In Touch</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'hsl(24 6% 48%)', marginTop: '12px', maxWidth: '500px' }}>
            I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and development
          </p>
        </div>
      </motion.div>

      {/* Body */}
      <div
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px 120px', display: 'grid', gridTemplateColumns: '1fr 420px', gap: '80px', alignItems: 'start' }}
        className="contact-grid"
      >
        {/* Form */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 28 }}
          animate={formVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'hsl(24 6% 55%)', marginBottom: '40px' }}>
            Send a Message
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '8px' }} className="form-row">
              {[
                { id: 'name', label: 'Name *', type: 'text', placeholder: 'Your full name' },
                { id: 'email', label: 'Email *', type: 'email', placeholder: 'your.email@example.com' },
              ].map((field, i) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={formVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'hsl(24 6% 55%)', marginBottom: '8px' }}>
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.id)}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder={field.placeholder}
                    style={inputStyle(field.id)}
                  />
                </motion.div>
              ))}
            </div>

            {[
              { id: 'subject', label: 'Subject *', type: 'input', placeholder: "What's this about?" },
              { id: 'message', label: 'Message *', type: 'textarea', placeholder: 'Tell me about your project or just say hello!' },
            ].map((field, i) => (
              <motion.div
                key={field.id}
                style={{ marginBottom: '8px', paddingTop: '24px' }}
                initial={{ opacity: 0, y: 16 }}
                animate={formVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.22 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'hsl(24 6% 55%)', marginBottom: '8px' }}>
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    rows={6}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.id)}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder={field.placeholder}
                    style={{ ...inputStyle(field.id), resize: 'none', lineHeight: 1.7, marginBottom: '40px' }}
                  />
                ) : (
                  <input
                    id={field.id}
                    type="text"
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.id)}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder={field.placeholder}
                    style={inputStyle(field.id)}
                  />
                )}
              </motion.div>
            ))}

            <MagneticWrapper strength={0.18}>
              <motion.button
                type="submit"
                disabled={isSending}
                className="btn-primary"
                style={{ opacity: isSending ? 0.65 : 1, display: 'flex', alignItems: 'center', gap: '8px' }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Send size={13} />
                {isSending ? 'Sending…' : 'Send Message'}
              </motion.button>
            </MagneticWrapper>
          </form>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          ref={sideRef}
          initial={{ opacity: 0, y: 28 }}
          animate={sideVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Contact details */}
          <div style={{ marginBottom: '48px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'hsl(24 6% 55%)', marginBottom: '28px' }}>
              Contact Information
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={i}
                    style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px 0', borderBottom: '1px solid hsl(30 12% 86%)' }}
                    initial={{ opacity: 0, x: 16 }}
                    animate={sideVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ x: 4 }}
                  >
                    <Icon size={15} style={{ color: 'hsl(24 6% 55%)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'hsl(24 6% 60%)', marginBottom: '4px' }}>{info.label}</p>
                      {info.href !== '#' ? (
                        <a href={info.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: 'hsl(24 8% 18%)', textDecoration: 'none' }}>{info.value}</a>
                      ) : (
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: 'hsl(24 8% 18%)' }}>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Social links */}
          <div style={{ marginBottom: '48px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'hsl(24 6% 55%)', marginBottom: '20px' }}>
              Connect With Me
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <MagneticWrapper key={i} strength={0.35}>
                    <motion.a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', border: '1px solid hsl(30 12% 82%)', borderRadius: '3px', color: 'hsl(24 6% 45%)', textDecoration: 'none' }}
                      whileHover={{ background: 'hsl(24 8% 14%)', color: 'hsl(36 20% 97%)', borderColor: 'hsl(24 8% 14%)', scale: 1.08 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={15} />
                    </motion.a>
                  </MagneticWrapper>
                );
              })}
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'hsl(24 6% 50%)', marginTop: '16px', lineHeight: 1.7 }}>
              Feel free to reach out through any of these platforms. I'm most active on LinkedIn
              and always respond to emails within 24 hours.
            </p>
          </div>

          {/* Availability card */}
          <motion.div
            style={{ padding: '24px', background: 'hsl(30 14% 93%)', border: '1px solid hsl(30 12% 84%)', borderRadius: '4px' }}
            whileHover={{ y: -3, boxShadow: '0 12px 40px hsl(24 8% 14% / 0.08)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <motion.span
                style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'hsl(142 55% 52%)', display: 'inline-block' }}
                animate={{ scale: [1, 1.35, 1], opacity: [1, 0.6, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'hsl(142 50% 38%)' }}>
                Available for opportunities
              </p>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.84rem', color: 'hsl(24 6% 42%)', lineHeight: 1.7 }}>
              I'm currently open to internship opportunities, freelance projects,
              and collaborations. Let's discuss how we can work together to create
              something amazing!
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        @media (max-width: 768px) { .contact-grid { padding: 0 24px 80px !important; } .form-row { grid-template-columns: 1fr !important; } }
        input::placeholder, textarea::placeholder { color: hsl(24 4% 65%); }
      `}</style>
    </section>
  );
};

export default Contact;
