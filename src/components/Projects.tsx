import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import llmImage from '@/assets/llm.png';

/* ── Shared reveal variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

/* ── 3-D Tilt Card ── */
const TiltCard = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 260, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 260, damping: 22 });
  const glowX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100]);

  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
    setLightPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
    setLightPos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 800,
        position: 'relative',
        ...style,
      }}
      className={className}
    >
      {/* Dynamic light overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: `radial-gradient(circle at ${lightPos.x}% ${lightPos.y}%, hsl(36 60% 98% / 0.18) 0%, transparent 60%)`,
          pointerEvents: 'none',
          zIndex: 2,
          transition: 'opacity 0.2s ease',
        }}
      />
      {children}
    </motion.div>
  );
};

const Projects = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const headVisible = useInView(headRef, { once: true, margin: '-80px' });
  const featuredVisible = useInView(featuredRef, { once: true, margin: '-60px' });
  const gridVisible = useInView(gridRef, { once: true, margin: '-60px' });
  const ctaVisible = useInView(ctaRef, { once: true, margin: '-40px' });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const featuredProject = {
    title: 'LLM-Powered Company Reputation Dashboard',
    subtitle: 'AI · Analytics · Full-Stack',
    description: 'An AI-driven dashboard that analyzes company reputation using Large Language Models across multiple data sources, providing real-time insights into brand sentiment and public perception.',
    features: [
      'LLM-based sentiment analysis across multi-source data',
      'Real-time tracking of brand perception and trends',
      'Interactive dashboards for data visualization',
      'Scalable backend for data aggregation and processing',
      'API integration for dynamic data fetching',
    ],
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Flask', 'Supabase', 'OpenAI API'],
    status: 'Featured Project',
    github: 'https://github.com/adhyasharma1806/LLM-powered-company-reputation-dashboard-',
    demo: 'https://llm-powered-company-reputation-dash.vercel.app/sign-in',
    image: llmImage,
  };

  const additionalProjects = [
    {
      title: 'GPU Allocation System',
      subtitle: 'for Academic Institutions',
      description: 'Developed a role-based GPU allocation platform with automated request handling, approval workflows, scheduling, and real-time usage tracking, improving resource utilization in academic environments.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/adhyasharma1806/gpuallocation',
      demo: 'https://pbl4-six.vercel.app',
      year: '2025',
    },
    {
      title: 'VoyageAI',
      subtitle: 'AI Travel Planner',
      description: 'A visually rich AI-powered travel planner web application with modern UI/UX, dynamic destination exploration, and interactive booking interface designed for seamless user experience.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Mapbox'],
      github: 'https://github.com/adhyasharma1806/VoyageAI',
      demo: 'https://voyage-ai-steel.vercel.app/',
      year: '2025',
    },
    {
      title: 'Airboard',
      subtitle: 'Hand Gesture Keyboard',
      description: 'Real-time hand detection using CVZone and OpenCV, enabling gesture-based keyboard control with customizable key mappings and responsive performance.',
      technologies: ['Python', 'OpenCV', 'CVZone', 'MediaPipe'],
      github: 'https://github.com/adhyasharma1806/AirBoard',
      demo: 'https://youtu.be/E5VNPF8y308',
      year: '2024',
    },
  ];

  return (
    <section id="projects" style={{ background: 'hsl(30 14% 93%)', position: 'relative' }}>
      <div style={{ borderTop: '1px solid hsl(30 12% 84%)' }} />

      {/* ── Section Header ── */}
      <div
        ref={headRef}
        style={{
          maxWidth: '1280px', margin: '0 auto',
          padding: '80px 48px 60px',
          display: 'flex', alignItems: 'baseline', gap: '24px',
          opacity: headVisible ? 1 : 0,
          transform: headVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <span className="section-number">— 04</span>
        <div>
          <h2 className="display-md">Featured Projects</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'hsl(24 6% 48%)', marginTop: '12px', maxWidth: '500px' }}>
            Showcasing my latest work and passion projects that demonstrate my technical skills and creativity
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px 120px' }} className="projects-container">

        {/* ── Featured Project with tilt ── */}
        <motion.div
          ref={featuredRef}
          initial={{ opacity: 0, y: 36 }}
          animate={featuredVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '80px' }}
        >
          <TiltCard
            style={{
              background: 'hsl(36 20% 97%)',
              border: '1px solid hsl(30 12% 82%)',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="featured-grid">
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden', background: 'hsl(24 8% 12%)', minHeight: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', position: 'absolute', inset: 0 }}
                  initial={{ opacity: 0.7, scale: 1.05 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  data-cursor="drag"
                />
                <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'hsl(36 20% 97%)', fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'hsl(24 8% 14%)', padding: '5px 12px', borderRadius: '2px', zIndex: 2 }}>
                  {featuredProject.status}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'hsl(24 6% 55%)', marginBottom: '16px' }}>{featuredProject.subtitle}</p>
                  <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.75rem', color: 'hsl(24 8% 12%)', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '20px' }}>{featuredProject.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'hsl(24 6% 38%)', lineHeight: 1.8, marginBottom: '28px' }}>{featuredProject.description}</p>
                  <div style={{ marginBottom: '28px' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'hsl(24 6% 55%)', marginBottom: '14px' }}>Key Features</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {featuredProject.features.map((f, i) => (
                        <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <span style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontSize: '0.68rem', color: 'hsl(24 6% 65%)', paddingTop: '2px', minWidth: '16px' }}>{(i + 1).toString().padStart(2, '0')}</span>
                          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.84rem', color: 'hsl(24 6% 38%)', lineHeight: 1.6 }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '32px' }}>
                    {featuredProject.technologies.map((tech, i) => (
                      <span key={i} className="skill-pill">{tech}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <motion.a href={featuredProject.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.72rem' }} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                    <ExternalLink size={13} />Live Demo
                  </motion.a>
                  <motion.a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: 'none', fontSize: '0.72rem' }} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                    <Github size={13} />Source Code
                  </motion.a>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* ── Other Projects Grid ── */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '40px' }}>
            <div style={{ height: '1px', width: '32px', background: 'hsl(24 6% 60%)' }} />
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'hsl(24 6% 50%)' }}>Other Projects</h3>
          </div>

          <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'hsl(30 12% 82%)', border: '1px solid hsl(30 12% 82%)', borderRadius: '4px', overflow: 'hidden' }} className="projects-grid">
            {additionalProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={gridVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: hoveredCard === i ? 'hsl(24 8% 12%)' : 'hsl(36 20% 97%)',
                  padding: '40px 36px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  minHeight: '320px', cursor: 'pointer',
                  transition: 'background 0.4s cubic-bezier(0.16,1,0.3,1)',
                }}
                onHoverStart={() => setHoveredCard(i)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ scale: 1.01 }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <span style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontSize: '0.75rem', color: hoveredCard === i ? 'hsl(36 20% 60%)' : 'hsl(24 6% 65%)', transition: 'color 0.35s ease' }}>{project.year}</span>
                    <motion.div animate={{ x: hoveredCard === i ? 2 : 0, y: hoveredCard === i ? -2 : 0 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                      <ArrowUpRight size={16} style={{ color: hoveredCard === i ? 'hsl(36 20% 80%)' : 'hsl(24 6% 65%)', transition: 'color 0.35s ease' }} />
                    </motion.div>
                  </div>
                  <h4 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.2rem', color: hoveredCard === i ? 'hsl(36 20% 97%)' : 'hsl(24 8% 14%)', letterSpacing: '-0.01em', lineHeight: 1.25, marginBottom: '4px', transition: 'color 0.35s ease' }}>{project.title}</h4>
                  <p style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontSize: '0.9rem', color: hoveredCard === i ? 'hsl(36 20% 65%)' : 'hsl(24 6% 55%)', marginBottom: '16px', transition: 'color 0.35s ease' }}>{project.subtitle}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: hoveredCard === i ? 'hsl(36 20% 72%)' : 'hsl(24 6% 42%)', lineHeight: 1.7, marginBottom: '20px', transition: 'color 0.35s ease' }}>{project.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.technologies.map((tech, j) => (
                      <span key={j} style={{ display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: '0.66rem', fontWeight: 500, letterSpacing: '0.04em', color: hoveredCard === i ? 'hsl(36 20% 70%)' : 'hsl(24 6% 48%)', border: `1px solid ${hoveredCard === i ? 'hsl(36 20% 35%)' : 'hsl(30 12% 80%)'}`, padding: '3px 9px', borderRadius: '2px', transition: 'color 0.35s ease, border-color 0.35s ease' }}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', marginTop: '28px', paddingTop: '20px', borderTop: `1px solid ${hoveredCard === i ? 'hsl(36 20% 25%)' : 'hsl(30 12% 84%)'}`, transition: 'border-color 0.35s ease' }}>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: hoveredCard === i ? 'hsl(36 20% 90%)' : 'hsl(24 6% 40%)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.35s ease' }} onClick={e => e.stopPropagation()}>
                    <ExternalLink size={12} /> Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: hoveredCard === i ? 'hsl(36 20% 75%)' : 'hsl(24 6% 55%)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.35s ease' }} onClick={e => e.stopPropagation()}>
                    <Github size={12} /> Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ borderTop: '1px solid hsl(30 12% 82%)', paddingTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}
        >
          <div>
            <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.4rem', color: 'hsl(24 8% 14%)', marginBottom: '8px', letterSpacing: '-0.015em' }}>Interested in Working Together?</h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: 'hsl(24 6% 45%)' }}>I'm always excited to take on new challenges and collaborate on innovative projects.</p>
          </div>
          <motion.a href="#contact" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.72rem' }} onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            Get In Touch <ArrowUpRight size={13} />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .featured-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .projects-container { padding: 0 24px 80px !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
