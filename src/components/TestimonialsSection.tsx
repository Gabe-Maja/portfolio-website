import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ExternalLink, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Elizabeth Kendall Stanley",
      role: "Senior Professional",
      image: "/media/elizabeth.jpg",
      quote: "I had the pleasure of working closely with Gabe during his time as a Data Scientist. His drive to grow - both technically and as a leader - stood out early on. He played a pivotal role in a pricing prediction project, delivering real-world impact through structured problem-solving and sharp analytical skills. Gabriel actively upskills when challenged and leads by example. He also mentored junior team members with clarity and care. A strong contributor with leadership potential and a genuine hunger to learn.",
      linkedinUrl: "https://www.linkedin.com/in/elizabeth-kendall-stanley-a5845650/overlay/about-this-profile/"
    },
    {
      id: 2,
      name: "Tetelo Maxwell Ndlalani", 
      role: "Data Professional",
      image: "/media/maxwell.jpg",
      quote: "Gabe is an exceptional data professional who not only understands the numbers but also knows how to tell a compelling story with them. His insights and analytics have transformed our approach to data-driven decision-making, leading to measurable improvements in our projects. I highly recommend him to anyone looking to elevate their data strategy.",
      linkedinUrl: "https://www.linkedin.com/in/tetelo-maxwell-ndlalani-1084758a/overlay/about-this-profile/"
    },
    {
      id: 3,
      name: "James Combrink",
      role: "Supervisor at EXPLORE Data Science Academy", 
      image: "/media/james.jpg",
      quote: "As his supervisor through course work and projects at EXPLORE Data Science Academy, on top of his interest and aptitude for Data Science in general, there is a clear aspect that sets Gabriel apart - which is his ability to create conversation regardless of the topic. He has shown consistency in engagements, bringing life and opening the floor for his classmates to feel comfortable to talk in otherwise pressured situations. He is an asset in the classroom, and holds high potential for a career in any form of engaged problem solving.",
      linkedinUrl: "https://www.linkedin.com/in/james-combrink/overlay/about-this-profile/"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-emerald-50/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What People <span className="text-primary">Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional recommendations from colleagues and supervisors
            </p>
          </div>

          {/* Testimonials Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/1">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      {/* Quote Icon */}
                      <Quote className="h-10 w-10 text-primary/20 mb-6" />
                      
                      {/* Testimonial Text */}
                      <blockquote className="text-muted-foreground leading-relaxed mb-8 text-lg">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground text-lg mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-3">
                            {testimonial.role}
                          </p>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(testimonial.linkedinUrl, "_blank")}
                            className="text-xs"
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            LinkedIn Profile
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />

            {/* Mobile carousel controls - moved inside Carousel */}
            <div className="flex justify-center gap-4 mt-8 md:hidden">
              <CarouselPrevious className="relative inset-auto translate-x-0 translate-y-0" />
              <CarouselNext className="relative inset-auto translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;