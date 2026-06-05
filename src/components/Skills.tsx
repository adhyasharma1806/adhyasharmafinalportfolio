import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const courseRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const headVisible = useInView(headRef, { once: true, margin: '-80px' });
  const bodyVisible = useInView(bodyRef, { once: true, margin: '-60px' });
  const courseVisible = useInView(courseRef, { once: true, margin: '-40px' });
  const quoteVisible = useInView(quoteRef, { once: true, margin: '-40px' });

  const skillGroups = [
    { category: 'Programming Languages', skills: ['Java', 'C++', 'Python', 'C', 'SQL'] },
    { category: 'Web Development', skills: ['React', 'Node.js', 'Next.js', 'Frappe Framework', 'Express.js'] },
    { category: 'Databases', skills: ['MySQL', 'MongoDB', 'Supabase'] },
    { category: 'Tools & Technologies', skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Microsoft Excel', 'Figma', 'Prototyping'] },
  ];

  const relevantCourses = [
    'Machine Learning', 'Object Oriented Programming', 'Deep Learning', 'Software Engineering',
    'Data Structures and Algorithms', 'Natural Language Processing', 'Computer Vision','Artificial Intelligence and Soft Computing'
  ];

  return (
    <section id="skills" style={{ background: 'hsl(30 14% 93%)', position: 'relative' }}>
      <div style={{ borderTop: '1px solid hsl(30 12% 84%)' }} />

      {/* Header */}
      <motion.div
        ref={headRef}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 48px 60px', display: 'flex', alignItems: 'baseline', gap: '24px' }}
        initial={{ opacity: 0, y: 24 }}
        animate={headVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="section-number">— 02</span>
        <div>
          <h2 className="display-md">Skills &amp; Expertise</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'hsl(24 6% 48%)', marginTop: '12px', maxWidth: '500px' }}>
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </div>
      </motion.div>

      <div ref={bodyRef} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px 120px' }}>

        {/* Skill grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0', borderTop: '1px solid hsl(30 12% 82%)', borderLeft: '1px solid hsl(30 12% 82%)', marginBottom: '80px' }}
          className="skills-grid"
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              style={{ padding: '40px', borderRight: '1px solid hsl(30 12% 82%)', borderBottom: '1px solid hsl(30 12% 82%)', background: 'hsl(36 20% 97%)', position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 24 }}
              animate={bodyVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ backgroundColor: 'hsl(36 20% 95%)' }}
            >
              <div style={{ position: 'absolute', top: '16px', right: '20px', fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontSize: '0.75rem', color: 'hsl(24 6% 70%)' }}>
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'hsl(24 6% 50%)', marginBottom: '20px' }}>
                {group.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    className="skill-pill"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={bodyVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.15 + i * 0.08 + j * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coursework */}
        <div ref={courseRef}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '40px' }}>
            <div style={{ height: '1px', width: '32px', background: 'hsl(24 6% 60%)' }} />
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'hsl(24 6% 50%)' }}>
              Relevant Coursework
            </h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', borderTop: '1px solid hsl(30 12% 82%)' }} className="courses-grid">
            {relevantCourses.map((course, i) => (
              <motion.div
                key={i}
                style={{ padding: '20px 24px', borderBottom: '1px solid hsl(30 12% 82%)', borderRight: i % 3 !== 2 ? '1px solid hsl(30 12% 82%)' : 'none', display: 'flex', alignItems: 'center', gap: '12px' }}
                className="course-item"
                initial={{ opacity: 0, y: 16 }}
                animate={courseVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ backgroundColor: 'hsl(36 20% 95%)', x: 4 }}
              >
                <span style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontSize: '0.7rem', color: 'hsl(24 6% 65%)', minWidth: '18px' }}>
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: 'hsl(24 8% 22%)' }}>
                  {course}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing quote */}
        <motion.div
          ref={quoteRef}
          style={{ marginTop: '80px', paddingTop: '48px', borderTop: '1px solid hsl(30 12% 82%)', maxWidth: '600px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={quoteVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontSize: '1.2rem', lineHeight: 1.7, color: 'hsl(24 6% 40%)' }}>
            "I'm constantly expanding my skill set and staying updated with the latest technologies.
            My focus is on mastering both frontend and backend development while building a strong
            foundation in data structures, algorithms, and software engineering principles."
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .courses-grid { grid-template-columns: 1fr !important; }
          .course-item { border-right: none !important; }
        }
        @media (max-width: 900px) {
          .courses-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
