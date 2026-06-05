import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import MagneticWrapper from './MagneticWrapper';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  // Hide nav on scroll down, reveal on scroll up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 30);
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: 0 }}
        animate={{ y: hidden ? '-100%' : 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: scrolled ? 'hsl(36 20% 97% / 0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid hsl(30 12% 84%)' : '1px solid transparent',
          transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

            {/* Logo */}
            <MagneticWrapper strength={0.2}>
              <motion.button
                onClick={() => scrollToSection('home')}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', cursor: 'pointer' }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  style={{
                    width: '30px', height: '30px',
                    background: 'hsl(24 8% 14%)',
                    borderRadius: '3px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                  whileHover={{ borderRadius: '8px' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <span style={{ color: 'hsl(36 20% 97%)', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'DM Serif Display, serif', fontStyle: 'italic' }}>A</span>
                </motion.div>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'hsl(24 8% 14%)' }}>
                  Adhya Sharma
                </span>
              </motion.button>
            </MagneticWrapper>

            {/* Desktop Nav Items */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="hidden md:flex">
              {navItems.slice(1).map((item) => (
                <MagneticWrapper key={item.id} strength={0.15}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      position: 'relative',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.73rem',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: activeSection === item.id ? 'hsl(24 8% 14%)' : 'hsl(24 6% 55%)',
                      padding: '4px 0',
                      transition: 'color 0.25s ease',
                    }}
                    onMouseEnter={e => { if (activeSection !== item.id) (e.currentTarget as HTMLElement).style.color = 'hsl(24 8% 22%)'; }}
                    onMouseLeave={e => { if (activeSection !== item.id) (e.currentTarget as HTMLElement).style.color = 'hsl(24 6% 55%)'; }}
                  >
                    {item.label}
                    {/* Animated underline */}
                    <motion.span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        height: '1px',
                        background: 'hsl(24 8% 14%)',
                        display: 'block',
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: activeSection === item.id ? '100%' : 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </button>
                </MagneticWrapper>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'hsl(24 8% 14%)', padding: '4px' }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close"
                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="menu"
                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <motion.div
              style={{ position: 'absolute', inset: 0, background: 'hsl(24 8% 14% / 0.45)', backdropFilter: 'blur(4px)' }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              style={{
                position: 'absolute', top: 0, right: 0, bottom: 0, width: '280px',
                background: 'hsl(36 20% 97%)', borderLeft: '1px solid hsl(30 12% 84%)',
                padding: '88px 40px 40px', display: 'flex', flexDirection: 'column',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 38 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ x: 28, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.04 + i * 0.055, type: 'spring', stiffness: 380, damping: 32 }}
                    style={{
                      textAlign: 'left', fontFamily: 'DM Serif Display, serif',
                      fontSize: '1.65rem', color: activeSection === item.id ? 'hsl(24 8% 14%)' : 'hsl(24 6% 55%)',
                      padding: '8px 0', background: 'none', border: 'none', cursor: 'pointer',
                      transition: 'color 0.2s ease',
                    }}
                    whileTap={{ x: 4 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              <div style={{ marginTop: 'auto', borderTop: '1px solid hsl(30 12% 84%)', paddingTop: '24px' }}>
                <p className="label-sm">adhyasharma1806@gmail.com</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@media (max-width: 768px) { .hidden.md\\:flex { display: none !important; } }`}</style>
    </>
  );
};

export default Navigation;
