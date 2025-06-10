
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:adhyasharma1800@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Message Ready!",
      description: "Your email client should open with the message pre-filled.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adhyasharma1800@gmail.com',
      href: 'mailto:adhyasharma1800@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9797892021',
      href: 'tel:+919797892021'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'NCR, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/adhyasharma5810334',
      color: 'hover:text-blue-400'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      href: 'https://adhyasharmaportfolio1.tiny.site',
      color: 'hover:text-green-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'hover:text-gray-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl transform -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in-up">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }} />
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and development
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <Card className="glass-effect border-white/10 hover-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 gradient-text">
                    Send Me a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                          Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-secondary/50 border-white/20 text-foreground placeholder:text-foreground/50 focus:border-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-secondary/50 border-white/20 text-foreground placeholder:text-foreground/50 focus:border-primary"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-white/20 text-foreground placeholder:text-foreground/50 focus:border-primary"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-white/20 text-foreground placeholder:text-foreground/50 focus:border-primary resize-none"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 hover-glow"
                    >
                      <Send size={18} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-right">
              {/* Contact Details */}
              <Card className="glass-effect border-white/10 hover-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 gradient-text">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div key={index} className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                            <Icon size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-foreground/60">{info.label}</p>
                            {info.href !== '#' ? (
                              <a 
                                href={info.href}
                                className="text-foreground hover:text-primary transition-colors duration-200"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass-effect border-white/10 hover-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 gradient-text">
                    Connect With Me
                  </h3>
                  
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 rounded-full glass-effect flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color} hover-glow`}
                        >
                          <Icon size={20} />
                        </a>
                      );
                    })}
                  </div>
                  
                  <p className="text-foreground/70 mt-6 leading-relaxed">
                    Feel free to reach out through any of these platforms. I'm most active on LinkedIn 
                    and always respond to emails within 24 hours.
                  </p>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="glass-effect border-white/10 hover-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 gradient-text">
                    Availability
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    I'm currently open to internship opportunities, freelance projects, 
                    and collaborations. Let's discuss how we can work together to create 
                    something amazing!
                  </p>
                  <div className="mt-4 inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    Available for opportunities
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
