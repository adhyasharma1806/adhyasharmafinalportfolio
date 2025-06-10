
import { Building, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Virtual Internship',
      company: 'JPMorgan Chase & Co.',
      location: 'Virtual Internship',
      duration: 'May 2025',
      type: 'Virtual Internship',
      description: [
        'Participated in a comprehensive virtual internship program focusing on software engineering principles',
        'Gained hands-on experience with financial technology systems and banking software solutions',
        'Developed problem-solving skills in a professional environment',
        'Learned industry best practices for software development in the financial sector',
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
        'Engaged in product design methodology and user experience principles',
        'Learned about design thinking processes and user-centered design approaches',
        'Developed understanding of product lifecycle and design strategy',
        'Gained insights into creating innovative solutions for complex business challenges',
      ],
      technologies: ['Product Design', 'UX/UI', 'Design Thinking', 'User Research'],
    },
    {
      title: 'UX Design Advanced Job Simulation',
      company: 'Lloyds Banking Group',
      location: 'Virtual Internship',
      duration: 'June 2025',
      type: 'Virtual Internship',
      description: [
        'Completed advanced UX design simulation focused on banking and financial services',
        'Applied user experience principles to real-world financial products',
        'Developed wireframes and prototypes for digital banking solutions',
        'Learned about accessibility and inclusive design in financial applications',
      ],
      technologies: ['UX Design', 'Wireframing', 'Prototyping', 'Figma', 'User Testing'],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in-up">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }} />
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Virtual internships and professional experiences that have shaped my skills and knowledge
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card 
                key={index}
                className="glass-effect border-white/10 hover-glow transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-primary mb-2">
                        <Building size={18} className="mr-2" />
                        <span className="text-lg font-medium">{experience.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-foreground/70">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>{experience.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-3">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-foreground/80">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="inline-block bg-secondary/50 text-foreground/90 px-3 py-1 rounded-full text-sm hover:bg-secondary/70 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Card className="glass-effect border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  Professional Development
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Through these virtual internships, I've gained valuable insights into industry practices 
                  and developed a strong understanding of professional software development, product design, 
                  and user experience principles. These experiences have enhanced my technical skills while 
                  providing exposure to real-world business challenges and solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
