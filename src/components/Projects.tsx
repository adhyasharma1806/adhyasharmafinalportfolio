
import { ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import llmImage from '@/assets/llm.png';

const Projects = () => {
  const projects = [
    {
      
  title: 'LLM-Powered Company Reputation Dashboard',
  description: 'An AI-driven dashboard that analyzes company reputation using Large Language Models across multiple data sources, providing real-time insights into brand sentiment and public perception.',
  
  technologies: [
  'Next.js',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'Flask',
  'Supabase',
  'OpenAI API'
],
  
  features: [
    'LLM-based sentiment analysis across multi-source data',
    'Real-time tracking of brand perception and trends',
    'Interactive dashboards for data visualization',
    'Scalable backend for data aggregation and processing',
    'API integration for dynamic data fetching'
  ],
  
  status: 'Featured Project',
  
  github: 'https://github.com/adhyasharma1806/LLM-powered-company-reputation-dashboard-', 
  demo: 'https://llm-powered-company-reputation-dash.vercel.app/sign-in',
  
  image: llmImage
}
  ];

  const additionalProjects = [
    {
  title: 'GPU Allocation System for Academic Institutions',
  
  description: 'Developed a role-based GPU allocation platform with automated request handling, approval workflows, scheduling, and real-time usage tracking, improving resource utilization in academic environments.',
  
  technologies: ['Next.js', 'Node.js', 'MongoDB', 'Express.js'],
  
  github: 'https://github.com/adhyasharma1806/gpuallocation',
  demo: 'https://pbl4-six.vercel.app'
    },
   
    {
  title: 'VoyageAI – AI Travel Planner',
  
  description: 'A visually rich AI-powered travel planner web application with modern UI/UX, dynamic destination exploration, and interactive booking interface designed for seamless user experience.',
  
  technologies: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Mapbox'
  ],
  
  github: 'https://github.com/adhyasharma1806/VoyageAI',
  demo: 'https://voyage-ai-steel.vercel.app/' 
},
    {
      title: 'Airboard: Hand Gesure- Controlled Keyboard',
      description: 'Real-time hand detection using CVZone and OpenCV, enabling gesture-based keyboard control with customizable key mappings and responsive performance.',
      technologies: ['Python', 'OpenCV', 'CVZone', 'MediaPipe'],
      github: 'https://github.com/adhyasharma1806/AirBoard',
      demo: 'https://youtu.be/E5VNPF8y308'
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }} />
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Showcasing my latest work and passion projects that demonstrate my technical skills and creativity
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-effect border-white/10 hover-glow transition-all duration-300 hover:scale-[1.02] animate-fade-in-up overflow-hidden"
              style={{ animationDelay: '0.6s' }}
            >
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-full w-full overflow-hidden">
  <img 
    src={project.image} 
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>
                      <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-8 lg:p-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      {project.title}
                    </h3>
                    
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-primary">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-foreground/80">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink size={18} className="mr-2" />
                        View Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-primary/50 text-primary hover:bg-primary/10 flex items-center"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={18} className="mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text animate-fade-in-up">
            Other Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <Card 
                key={index}
                className="glass-effect border-white/10 hover-glow transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 text-foreground">
                    {project.title}
                  </h4>
                  
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="inline-block bg-secondary/50 text-foreground/90 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-primary/50 text-primary hover:bg-primary/10 flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Card className="glass-effect border-white/10 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Interested in Working Together?
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's discuss how we can bring your ideas to life!
              </p>
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
