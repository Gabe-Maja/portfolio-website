import { Mail, Linkedin, Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const email = "gabemaja10@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/gabriel-kevin-maja/";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleLinkedInClick = () => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Gabriel Maja</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Data Analyst & Automation Specialist transforming complex data into actionable business insights through advanced analytics and AI-driven solutions.
            </p>
            <div className="flex space-x-3">
              <Button
                onClick={handleEmailClick}
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-primary/10"
                aria-label="Send email"
              >
                <Mail className="h-4 w-4" />
              </Button>
              <Button
                onClick={handleLinkedInClick}
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-primary/10"
                aria-label="View LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                Ready to transform your data into insights?
              </p>
              <Button
                onClick={handleEmailClick}
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <Mail className="mr-2 h-4 w-4" />
                {email}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>© {currentYear} Gabriel Maja. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;