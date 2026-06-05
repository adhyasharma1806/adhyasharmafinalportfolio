import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const headVisible = useInView(headRef, { once: true, margin: '-80px' });
  const leftVisible = useInView(leftRef, { once: true, margin: '-60px' });
  const rightVisible = useInView(rightRef, { once: true, margin: '-60px' });

  const highlights = [
    { number: '01', title: 'Education', description: 'Computer Science Engineering at Manipal University Jaipur', detail: 'August 2023 – 2027 (Expected)' },
    { number: '02', title: 'Location', description: 'Manipal University Jaipur, India', detail: '+91 9797892021' },
    { number: '03', title: 'Focus Areas', description: 'Full-Stack Development, Artificial Intelligence, Machine Learning, LLMs, Data Visualization', detail: 'Always learning new technologies' },
  ];

  const drives = [
    'Continuous learning and adaptation to new technologies',
    'Building efficient and scalable solutions',
    'Collaborating with teams to achieve common goals',
    'Creating positive user experiences through design',
  ];

  const paragraphs = [
    "I'm a dedicated Computer Science Engineering student at Manipal University Jaipur, driven by a passion for creating innovative solutions through technology. My journey in programming began with curiosity and has evolved into a deep commitment to excellence in software development.",
    "With a strong foundation in multiple programming languages and frameworks, I specialize in Full-stack web development, Data Structures and Algorithms, Artificial Intelligence, LLMs and Data Visualization. I believe in writing clean, efficient code and creating user-centered applications that solve real-world problems.",
    "My objective is to obtain a formidable position where I can leverage my skills and knowledge to handle assigned projects, while taking on challenging new roles that enhance my interpersonal skills, collaboration, and problem-solving abilities.",
  ];

  return (
    <section id="about" style={{ background: 'hsl(36 20% 97%)', position: 'relative' }}>
      <div style={{ borderTop: '1px solid hsl(30 12% 84%)' }} />

      {/* Section header */}
      <motion.div
        ref={headRef}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 48px 60px', display: 'flex', alignItems: 'baseline', gap: '24px' }}
        initial={{ opacity: 0, y: 24 }}
        animate={headVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-number">— 01</span>
        <h2 className="display-md">About Me</h2>
      </motion.div>

      {/* Content grid */}
      <div
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px 120px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
        className="about-grid"
      >
        {/* Left – prose */}
        <div ref={leftRef}>
          <motion.div
            style={{ marginBottom: '40px' }}
            initial={{ opacity: 0, y: 28 }}
            animate={leftVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.6rem', color: 'hsl(24 8% 14%)', letterSpacing: '-0.02em', marginBottom: '24px', lineHeight: 1.25 }}>
              Passionate Developer<br />
              <span style={{ fontStyle: 'italic', color: 'hsl(24 6% 45%)' }}>&amp; Problem Solver</span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'hsl(24 6% 38%)', fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={leftVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* What drives me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={leftVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'hsl(24 6% 55%)', marginBottom: '20px' }}>
              What drives me
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {drives.map((d, i) => (
                <motion.div
                  key={i}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '14px 0', borderBottom: '1px solid hsl(30 12% 88%)' }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={leftVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 4 }}
                >
                  <span style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontSize: '0.75rem', color: 'hsl(24 6% 60%)', minWidth: '20px', paddingTop: '1px' }}>
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: 'hsl(24 6% 35%)', lineHeight: 1.6 }}>
                    {d}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right – highlights */}
        <div ref={rightRef} style={{ display: 'flex', flexDirection: 'column', gap: '0', paddingTop: '8px' }}>
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              style={{ borderTop: i === 0 ? '1px solid hsl(30 12% 84%)' : undefined, borderBottom: '1px solid hsl(30 12% 84%)', padding: '32px 0', display: 'grid', gridTemplateColumns: '48px 1fr', gap: '24px' }}
              initial={{ opacity: 0, y: 24 }}
              animate={rightVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.14, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 6 }}
            >
              <span style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontSize: '1rem', color: 'hsl(24 6% 60%)', paddingTop: '3px' }}>{item.number}</span>
              <div>
                <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'hsl(24 6% 55%)', marginBottom: '10px' }}>{item.title}</h4>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'hsl(24 8% 18%)', fontWeight: 500, lineHeight: 1.5, marginBottom: '6px' }}>{item.description}</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'hsl(24 6% 55%)' }}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; padding: 0 24px 80px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
