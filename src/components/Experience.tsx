import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const headVisible = useInView(headRef, { once: true, margin: '-80px' });

  const experiences = [
    {
      title: 'Software Developer',
      company: 'HATCH',
      location: 'Gurugram, India',
      duration: 'June 2026 – Present',
      type: 'Internship',
      description: [
        'Contributing as a Software Developer Intern to enterprise-scale applications, collaborating with cross-functional teams to design, develop, and improve software components aligned with business requirements.',
        'Displayed professionalism and ownership in a corporate environment, meeting deliverables on time while aligning with organizational processes, security guidelines, and quality standards.',
        'Followed industry-standard engineering practices, including clean code, version control, documentation, and structured problem-solving, ensuring quality and maintainability of deliverables.',
      ],
        technologies: ['ASP.NET', 'OOPS IN c#', 'Angular', 'SQL',  '.NET', 'REST APIs', 'Git'],
    },
    {
      title: 'Tech Intern',
      company: 'Eduxa AI',
      location: 'New Delhi, India',
      duration: 'May 2026 – June 2026',
      type: 'Internship',
      description: [
        'Developed and delivered multiple production-ready web pages and contributed to core website modules for the company and its brands, strengthening user experience and business presence.',
        'Rapidly adapted to the Frappe Framework, implementing backend functionality and building a functional mini-project within a short learning curve, demonstrating strong technical agility.',
        'Gained hands-on exposure to the company’s backend architecture, data handling workflows, and system design practices.',
      ],
      technologies: ['JavaScript', 'TypeScript', 'Next.js', 'Node.js',  'Frappe Framework', 'REST APIs', 'Git'],
    },
    {
      title: 'Software Developer Intern',
      company: 'Software Development Centre (MUJ)',
      location: 'Jaipur, India',
      duration: 'Aug 2025 – May 2026',
      type: 'Internship',
      description: [
        'Contributed to full-stack development of internal systems in collaboration with cross-functional teams.',
        'Designed, developed, and optimized scalable application features to improve system performance.',
        'Worked across both frontend and backend to ensure seamless functionality and integration.',
      ],
      technologies: ['JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git'],
    },
    {
      title: 'Software Engineering Virtual Internship',
      company: 'JPMorgan Chase & Co.',
      location: 'Virtual Internship',
      duration: 'May 2025',
      type: 'Virtual Internship',
      description: [
        'Participated in a comprehensive virtual internship program focusing on software engineering principles.',
        'Gained hands-on experience with financial technology systems and banking software solutions.',
        'Developed problem-solving skills in a professional environment.',
        'Learned industry best practices for software development in the financial sector.',
      ],
      technologies: ['Software Engineering', 'Financial Technology', 'Problem Solving'],
    },
    {
      title: 'Product Design Virtual Internship',
      company: 'Accenture',
      location: 'Virtual Internship',
      duration: 'May 2025',
      type: 'Virtual Internship',
      description: [
        'Engaged in product design methodology and user experience principles.',
        'Learned about design thinking processes and user-centered design approaches.',
        'Developed understanding of product lifecycle and design strategy.',
        'Gained insights into creating innovative solutions for complex business challenges.',
      ],
      technologies: ['Product Design', 'UX/UI', 'Design Thinking', 'User Research'],
    },
  ];

  return (
    <section id="experience" style={{ background: 'hsl(36 20% 97%)', position: 'relative' }}>
      <div style={{ borderTop: '1px solid hsl(30 12% 84%)' }} />

      {/* Header */}
      <motion.div
        ref={headRef}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 48px 60px', display: 'flex', alignItems: 'baseline', gap: '24px' }}
        initial={{ opacity: 0, y: 24 }}
        animate={headVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-number">— 03</span>
        <div>
          <h2 className="display-md">Experience</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'hsl(24 6% 48%)', marginTop: '12px', maxWidth: '500px' }}>
            Virtual internships and professional experiences that have shaped my skills and knowledge
          </p>
        </div>
      </motion.div>

      {/* Experience entries */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px 120px' }} className="exp-container">
        {experiences.map((exp, i) => {
          const rowRef = useRef<HTMLDivElement>(null);
          const rowVisible = useInView(rowRef, { once: true, margin: '-60px' });
          return (
            <motion.div
              key={i}
              ref={rowRef}
              style={{ borderTop: '1px solid hsl(30 12% 84%)', padding: '56px 0', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '64px' }}
              className="exp-row"
              initial={{ opacity: 0, y: 30 }}
              animate={rowVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Left meta */}
              <div>
                <motion.div
                  style={{ display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'hsl(24 6% 50%)', border: '1px solid hsl(30 12% 82%)', padding: '4px 10px', borderRadius: '2px', marginBottom: '20px' }}
                  whileHover={{ borderColor: 'hsl(24 8% 14%)', color: 'hsl(24 8% 14%)' }}
                  transition={{ duration: 0.2 }}
                >
                  {exp.type}
                </motion.div>
                <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.3rem', color: 'hsl(24 8% 14%)', letterSpacing: '-0.01em', lineHeight: 1.25, marginBottom: '10px' }}>{exp.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', fontWeight: 500, color: 'hsl(24 6% 35%)', marginBottom: '8px' }}>{exp.company}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'hsl(24 6% 55%)' }}>{exp.location}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'hsl(24 6% 55%)', fontStyle: 'italic' }}>{exp.duration}</p>
                </div>
              </div>

              {/* Right content */}
              <div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {exp.description.map((item, j) => (
                    <motion.li
                      key={j}
                      style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}
                      initial={{ opacity: 0, x: -12 }}
                      animate={rowVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.12 + j * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontSize: '0.7rem', color: 'hsl(24 6% 65%)', minWidth: '18px', paddingTop: '3px' }}>
                        {(j + 1).toString().padStart(2, '0')}
                      </span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'hsl(24 6% 35%)', lineHeight: 1.7 }}>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.technologies.map((tech, j) => (
                    <motion.span
                      key={j}
                      className="skill-pill"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={rowVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + j * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Closing quote */}
        <motion.div
          style={{ borderTop: '1px solid hsl(30 12% 84%)', paddingTop: '48px', maxWidth: '640px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.75, color: 'hsl(24 6% 42%)' }}>
            "Through these virtual internships, I've gained valuable insights into industry practices
            and developed a strong understanding of professional software development, product design,
            and user experience principles."
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-container { padding: 0 24px 80px !important; }
          .exp-row { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
