import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import portraitSrc from '@/assets/portrait.png';
import MagneticWrapper from './MagneticWrapper';

/* ── Word-split reveal component ── */
const WordReveal = ({
  text,
  delay = 0,
  className,
  style,
  italic,
}: {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  italic?: boolean;
}) => {
  const words = text.split(' ');
  return (
    <span style={{ display: 'block', overflow: 'hidden', ...style }} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{
            display: 'inline-block',
            marginRight: '0.22em',
            fontStyle: italic ? 'italic' : undefined,
          }}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: delay + i * 0.06,
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scrollY = useMotionValue(0);

  const portraitX = useSpring(useTransform(mouseX, [0, 1], [-12, 12]), { stiffness: 120, damping: 28 });
  const portraitY = useSpring(
    useTransform(mouseX, [0, 1], [-8, 8]),
    { stiffness: 120, damping: 28 }
  );

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    const onScroll = () => scrollY.set(window.scrollY);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, [mouseX, mouseY, scrollY]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const socials = [
    { icon: Mail, label: 'Email', href: 'mailto:adhyasharma1806@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/adhyasharma5810334', external: true },
    { icon: Github, label: 'GitHub', href: 'https://github.com/adhyasharma1806', external: true },
    { icon: FileText, label: 'Resume', href: 'https://adhyasharmaportfolio1.tiny.site', external: true },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        minHeight: '100vh',
        background: 'hsl(36 20% 97%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
        display: 'grid',
        gridTemplateColumns: '1fr',
      }}
    >
      {/* Grid texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(hsl(30 12% 84% / 0.35) 1px, transparent 1px), linear-gradient(90deg, hsl(30 12% 84% / 0.35) 1px, transparent 1px)`, backgroundSize: '72px 72px', pointerEvents: 'none', zIndex: 0 }} />

      {/* Giant watermark */}
      <motion.div
        style={{ position: 'absolute', left: '-3%', bottom: '-8%', fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(22rem, 38vw, 56rem)', lineHeight: 1, color: 'hsl(24 8% 14% / 0.03)', userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.06em', zIndex: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
      >
        A
      </motion.div>

      {/* Thin accent line */}
      <motion.div
        style={{ position: 'absolute', top: '80px', right: '0', height: '1px', background: 'hsl(30 12% 84%)', zIndex: 1 }}
        initial={{ width: 0 }}
        animate={{ width: '45%' }}
        transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* ── Two-column layout ── */}
      <div
        className="hero-outer"
        style={{ display: 'grid', gridTemplateColumns: '55% 45%', minHeight: 'calc(100vh - 80px)', maxWidth: '1440px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}
      >
        {/* LEFT */}
        <div
          className="hero-left"
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 'clamp(40px,5vw,80px) clamp(24px,5vw,64px) clamp(40px,4vw,60px)' }}
        >
          {/* Top metadata */}
          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label-sm">Software Engineer & AI Researcher</span>
            <div style={{ height: '1px', width: '32px', background: 'hsl(30 12% 78%)' }} />
            <span className="label-sm">MUJ, India</span>
            <div style={{ height: '1px', width: '32px', background: 'hsl(30 12% 78%)' }} />
            <motion.span
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'hsl(36 20% 97%)', background: 'hsl(24 8% 14%)', padding: '4px 10px', borderRadius: '2px' }}
              whileHover={{ scale: 1.04 }}
            >
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'hsl(142 60% 55%)', display: 'inline-block', animation: 'pulse-dot 2s ease-in-out infinite' }} />
              Available
            </motion.span>
          </motion.div>

          {/* Giant stacked name — word reveal */}
          <div style={{ margin: 'auto 0', paddingTop: '24px', paddingBottom: '24px' }}>
            {mounted && (
              <>
                <WordReveal
                  text="Adhya"
                  delay={0.25}
                  className="display-xl hero-name"
                  style={{ lineHeight: 0.9, marginBottom: '0.05em' }}
                />
                <WordReveal
                  text="Sharma"
                  delay={0.38}
                  italic
                  className="display-xl hero-name"
                  style={{ lineHeight: 0.9, color: 'hsl(24 6% 52%)' }}
                />
              </>
            )}

            {/* Rule */}
            <motion.div
              style={{ height: '1px', background: 'hsl(30 12% 82%)', marginTop: 'clamp(24px,3vw,40px)' }}
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Descriptor */}
            <motion.p
              style={{ marginTop: 'clamp(20px,2.5vw,32px)', fontSize: 'clamp(0.88rem,1.1vw,1rem)', lineHeight: 1.85, color: 'hsl(24 6% 42%)', fontFamily: 'Inter, sans-serif', maxWidth: '440px' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              Passionate about creating innovative solutions through code. Specializing in
              full-stack web development, data structures, and AI-powered applications
              that make a difference.
            </motion.p>
          </div>

          {/* CTAs + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.88, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <MagneticWrapper strength={0.2}>
                <motion.button
                  className="btn-primary"
                  onClick={() => scrollTo('projects')}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  View My Work <ArrowDown size={13} />
                </motion.button>
              </MagneticWrapper>
              <MagneticWrapper strength={0.2}>
                <motion.button
                  className="btn-outline"
                  onClick={() => scrollTo('contact')}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Get In Touch
                </motion.button>
              </MagneticWrapper>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '28px', alignItems: 'center', borderTop: '1px solid hsl(30 12% 84%)', paddingTop: '20px' }}>
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <MagneticWrapper key={s.label} strength={0.3}>
                    <motion.a
                      href={s.href}
                      target={s.external ? '_blank' : undefined}
                      rel={s.external ? 'noopener noreferrer' : undefined}
                      title={s.label}
                      style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'hsl(24 6% 52%)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', textDecoration: 'none', opacity: 1 }}
                      whileHover={{ color: 'hsl(24 8% 14%)', y: -1 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Icon size={14} />
                      <span className="social-label">{s.label}</span>
                    </motion.a>
                  </MagneticWrapper>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — portrait */}
        <div
          className="hero-right"
          style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'visible' }}
        >
          {/* Vertical editorial caption */}
          <motion.div
            style={{ position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'center center', fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'hsl(24 6% 62%)', whiteSpace: 'nowrap', zIndex: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Portrait · Adhya Sharma
          </motion.div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '520px', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>

            {/* Corner accent marks */}
            <motion.div style={{ position: 'absolute', right: '18%', top: '12%', width: '1px', height: '80px', background: 'hsl(30 12% 72%)', zIndex: 2 }} initial={{ scaleY: 0, transformOrigin: 'top' }} animate={{ scaleY: 1 }} transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }} />
            <motion.div style={{ position: 'absolute', right: '18%', top: '12%', width: '24px', height: '1px', background: 'hsl(30 12% 72%)', zIndex: 2 }} initial={{ scaleX: 0, transformOrigin: 'right' }} animate={{ scaleX: 1 }} transition={{ delay: 1.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }} />

            {/* Vol tag */}
            <motion.div
              style={{ position: 'absolute', top: '14%', right: '14%', zIndex: 4 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(24 6% 55%)', textAlign: 'right', lineHeight: 1.8 }}>
                <div>CS Engineer</div>
                <div style={{ color: 'hsl(24 8% 14%)', fontWeight: 700, fontSize: '0.7rem' }}>Vol. 01</div>
              </div>
            </motion.div>

            {/* Portrait with parallax */}
            <motion.div
              style={{ position: 'relative', width: 'min(100%, 1028px)', zIndex: 2, x: portraitX, y: portraitY }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={portraitSrc}
                  alt="Adhya Sharma"
                  draggable={false}
                  data-cursor="drag"
                  style={{ width: '100%', height: 'auto', display: 'block', userSelect: 'none', mixBlendMode: 'multiply', filter: 'contrast(1.08) brightness(1.02) saturate(1.05)', imageRendering: 'auto' }}
                />
                {/* Bottom fade */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '22%', background: 'linear-gradient(to top, hsl(36 20% 97%) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 3 }} />
                {/* Left fade */}
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '20%', background: 'linear-gradient(to right, hsl(36 20% 97% / 0.5) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 3 }} />
              </motion.div>
            </motion.div>

            {/* Stat card */}
            <motion.div
              style={{ position: 'absolute', bottom: '12%', left: '4%', zIndex: 5 }}
              initial={{ opacity: 0, y: 16, x: -8 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <div style={{ background: 'hsl(36 20% 97% / 0.88)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid hsl(30 12% 84%)', borderRadius: '3px', padding: '14px 18px', boxShadow: '0 8px 32px hsl(24 8% 14% / 0.08)' }}>
                <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.8rem', fontStyle: 'italic', color: 'hsl(24 8% 14%)', lineHeight: 1, marginBottom: '4px' }}>2+</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'hsl(24 6% 55%)' }}>Years of<br />Experience</div>
              </div>
            </motion.div>

            {/* Discipline tag */}
            <motion.div
              style={{ position: 'absolute', bottom: '22%', right: '2%', zIndex: 5 }}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <div style={{ background: 'hsl(24 8% 14%)', borderRadius: '2px', padding: '10px 14px', boxShadow: '0 6px 24px hsl(24 8% 14% / 0.2)' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(36 20% 97% / 0.6)', marginBottom: '4px' }}>Discipline</div>
                <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '0.9rem', fontStyle: 'italic', color: 'hsl(36 20% 97%)', lineHeight: 1.2 }}>Full-Stack<br />& AI</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <motion.div
        style={{ borderTop: '1px solid hsl(30 12% 84%)', padding: '18px clamp(24px,5vw,64px)', maxWidth: '1440px', margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05, duration: 0.8 }}
      >
        <span className="label-sm">Computer Science Engineering Student · 2023–2027</span>
        <MagneticWrapper strength={0.18}>
          <motion.button
            onClick={() => scrollTo('about')}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'hsl(24 6% 52%)', background: 'none', border: 'none', fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            whileHover={{ color: 'hsl(24 8% 14%)' }}
          >
            Scroll to explore
            <motion.span animate={{ y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
              <ArrowDown size={11} />
            </motion.span>
          </motion.button>
        </MagneticWrapper>
      </motion.div>

      <style>{`
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.3)} }
        @media (max-width:900px){.hero-outer{grid-template-columns:1fr!important}.hero-right{min-height:55vw;max-height:70vh}}
        @media (max-width:600px){.social-label{display:none}}
      `}</style>
    </section>
  );
};

export default Hero;
