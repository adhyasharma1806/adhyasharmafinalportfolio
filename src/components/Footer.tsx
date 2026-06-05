import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer style={{ background: 'hsl(24 8% 12%)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(hsl(36 20% 90% / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(36 20% 90% / 0.04) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />

      {/* Large decorative letter */}
      <div
        style={{
          position: 'absolute',
          left: '-2%',
          bottom: '-10%',
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(16rem, 25vw, 32rem)',
          lineHeight: 1,
          color: 'hsl(36 20% 97% / 0.03)',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.06em',
        }}
      >
        AS
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 48px 40px', position: 'relative' }}>
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '64px',
            flexWrap: 'wrap',
            gap: '48px',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '360px' }}>
            <h2
              style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: 'hsl(36 20% 97%)',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: '20px',
              }}
            >
              Adhya Sharma
            </h2>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.88rem',
                color: 'hsl(36 20% 55%)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              Computer Science Engineering Student passionate about creating innovative solutions through technology.
            </p>
            <a
              href="mailto:adhyasharma1806@gmail.com"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                color: 'hsl(36 20% 75%)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: '1px solid hsl(36 20% 30%)',
                paddingBottom: '2px',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'hsl(36 20% 95%)'; e.currentTarget.style.borderColor = 'hsl(36 20% 60%)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'hsl(36 20% 75%)'; e.currentTarget.style.borderColor = 'hsl(36 20% 30%)'; }}
            >
              adhyasharma1806@gmail.com
            </a>
          </div>

          {/* Nav links */}
          <div>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'hsl(36 20% 40%)',
                marginBottom: '20px',
              }}
            >
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {links.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.88rem',
                    color: 'hsl(36 20% 55%)',
                    padding: 0,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'hsl(36 20% 90%)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'hsl(36 20% 55%)')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social + back to top */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '24px' }}>
            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'hsl(36 20% 97% / 0.08)',
                border: '1px solid hsl(36 20% 97% / 0.15)',
                borderRadius: '2px',
                padding: '10px 16px',
                color: 'hsl(36 20% 75%)',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'hsl(36 20% 97% / 0.15)'; e.currentTarget.style.color = 'hsl(36 20% 97%)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'hsl(36 20% 97% / 0.08)'; e.currentTarget.style.color = 'hsl(36 20% 75%)'; }}
            >
              <ArrowUp size={13} />
              Back to top
            </button>
          </div>
        </div>

        {/* Bottom divider */}
        <div style={{ borderTop: '1px solid hsl(36 20% 97% / 0.1)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'hsl(36 20% 35%)' }}>
            © {currentYear} Adhya Sharma. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'hsl(36 20% 30%)' }}>
            Built with React · TypeScript · Tailwind CSS · Vite
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
