
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in-up mb-6">
            <span className="text-primary text-lg font-medium">Hello, I'm</span>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="gradient-text animate-glow">Adhya Sharma</span>
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-foreground/90 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Computer Science Engineering Student
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Passionate about creating innovative solutions through code. Specializing in web development, 
            data structures, and building user-friendly applications that make a difference.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg hover-glow"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <a 
              href="mailto:adhyasharma1800@gmail.com"
              className="p-3 rounded-full glass-effect hover-glow transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/adhyasharma5810334"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover-glow transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://adhyasharmaportfolio1.tiny.site"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect hover-glow transition-all duration-300 hover:scale-110"
            >
              <FileText size={24} />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/50 hover:text-primary transition-colors duration-300 animate-bounce"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
