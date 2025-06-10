
import { Code, Database, Palette, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Web Development',
      icon: Palette,
      skills: ['React.js', 'Node.js', 'Next.js'],
      color: 'from-purple-500 to-violet-500',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Microsoft Excel', 'Figma', 'Prototyping'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const relevantCourses = [
    'Statistics and Probability',
    'Object Oriented Programming',
    'Computer Organization',
    'Data Structures and Algorithms',
    'Databases',
    'Operating System',
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl transform -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transform -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in-up">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }} />
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="glass-effect border-white/10 hover-glow transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} p-4 text-white`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-primary/30 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Relevant Coursework */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect border-white/10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
                Relevant Coursework
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {relevantCourses.map((course, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-foreground/90">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Overview */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Continuous Learning Journey
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              I'm constantly expanding my skill set and staying updated with the latest technologies. 
              My focus is on mastering both frontend and backend development while building a strong 
              foundation in data structures, algorithms, and software engineering principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
