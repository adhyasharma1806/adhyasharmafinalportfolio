
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Computer Science Engineering at Manipal University Jaipur',
      detail: 'August 2023 - 2027 (Expected)',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'NCR, India',
      detail: '+91 9797892021',
    },
    {
      icon: Star,
      title: 'Focus Areas',
      description: 'Full-Stack Development & Data Structures',
      detail: 'Always learning new technologies',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }} />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Passionate Developer & Problem Solver
              </h3>
              
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p className="text-lg">
                  I'm a dedicated Computer Science Engineering student at Manipal University Jaipur, 
                  driven by a passion for creating innovative solutions through technology. My journey 
                  in programming began with curiosity and has evolved into a deep commitment to 
                  excellence in software development.
                </p>
                
                <p className="text-lg">
                  With a strong foundation in multiple programming languages and frameworks, I specialize 
                  in full-stack web development, data structures, and algorithms. I believe in writing 
                  clean, efficient code and creating user-centered applications that solve real-world problems.
                </p>
                
                <p className="text-lg">
                  My objective is to obtain a formidable position where I can leverage my skills and 
                  knowledge of educational qualifications to handle assigned projects, while taking on 
                  challenging new roles that enhance my interpersonal skills, collaboration, and problem-solving abilities.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-primary">
                  What drives me:
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Continuous learning and adaptation to new technologies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Building efficient and scalable solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Collaborating with teams to achieve common goals
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Creating positive user experiences through design
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="space-y-6 animate-fade-in-right">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass-effect border-white/10 hover-glow transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-primary/20 text-primary">
                          <Icon size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2 text-foreground">
                            {item.title}
                          </h4>
                          <p className="text-foreground/80 mb-1">
                            {item.description}
                          </p>
                          <p className="text-sm text-primary">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
