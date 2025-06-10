
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            className="mb-8 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 rounded-full p-3 hover-glow transition-all duration-300 hover:scale-110"
            size="sm"
          >
            <ArrowUp size={20} />
          </Button>

          {/* Name/Logo */}
          <h3 className="text-2xl font-bold gradient-text mb-4">
            Adhya Sharma
          </h3>

          {/* Tagline */}
          <p className="text-foreground/70 mb-6 max-w-md">
            Computer Science Engineering Student passionate about creating innovative solutions through technology
          </p>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-foreground/60">
            <span>© {currentYear} Adhya Sharma. Made with</span>
            <Heart size={16} className="text-primary animate-pulse" />
            <span>and lots of coffee</span>
          </div>

          {/* Tech Stack */}
          <div className="mt-4 text-sm text-foreground/50">
            <p>Built with React, TypeScript, Tailwind CSS & Vite</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
