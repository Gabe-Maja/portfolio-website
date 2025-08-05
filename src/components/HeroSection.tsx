import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";

const HeroSection = () => {
  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    // Open PDF in new tab
    window.open("/media/CV - Gabriel Maja 2025.pdf", "_blank");
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-emerald-50/20"
      aria-label="Hero section - Gabriel Maja Data Analyst"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-emerald-600 to-primary bg-clip-text text-transparent">
              Data & AI Insights
            </span>
            <br />
            <span className="text-foreground">Unlocked</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.2s]">
            Leveraging AI, Data Science and Advanced Analytics to Transform Data into 
            <span className="text-primary font-semibold"> Actionable Solutions </span>
            with Measurable Impact
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:0.4s]">
            <Button
              onClick={handleContactClick}
              size="lg"
              className="px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Navigate to contact section"
            >
              <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
              Contact Me
            </Button>
            
            <Button
              onClick={handleResumeClick}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Open resume in new tab"
            >
              <FileText className="mr-2 h-5 w-5" aria-hidden="true" />
              View My Resume
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;