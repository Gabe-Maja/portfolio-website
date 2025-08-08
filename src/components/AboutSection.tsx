import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
const AboutSection = () => {
  const hardSkills = ["SQL", "Power BI", "SSRS", "AI Agents", "Process Automation", "Python",  "MS Excel", "Google Sheets", "Machine Learning", "Azure", "Databricks", "Git", "GitHub"];
  const softSkills = ["Communication", "Leadership", "Teamwork & Collaboration", "Problem-Solving", "Time Management"];
  const industries = ["Insurance", "Fintech", "Marketing"];
  return <section id="about" className="py-20 bg-gradient-to-b from-background to-emerald-50/10" aria-label="About Gabriel Maja section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-primary">Gabriel Kevin Maja (Gabe)</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data Analytics & Business Intelligence Professional
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/devb6meyp/image/upload/gabe_wgwbj8.jpg"
                  alt="Professional headshot of Gabriel Maja, Data Analyst and Automation Specialist" 
                  className="w-80 h-96 object-cover object-center rounded-2xl shadow-2xl transition-opacity duration-300" 
                  style={{
                    objectPosition: "center top"
                  }} 
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjM4NCIgdmlld0JveD0iMCAwIDMyMCAzODQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzg0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNjAgMTkyQzE3Ni41NjkgMTkyIDE5MCAyMDUuNDMxIDE5MCAyMjJDMTkwIDIzOC41NjkgMTc2LjU2OSAyNTIgMTYwIDI1MkMxNDMuNDMxIDI1MiAxMzAgMjM4LjU2OSAxMzAgMjIyQzEzMCAyMDUuNDMxIDE0My40MzEgMTkyIDE2MCAxOTJaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0xMTAgMzAwQzExMCAyODMuNDMxIDEyMy40MzEgMjcwIDE0MCAyNzBIMTgwQzE5Ni41NjkgMjcwIDIxMCAyODMuNDMxIDIxMCAzMDBWMzMwSDExMFYzMDBaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjE2MCIgeT0iMzYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjM3OEI3IiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPg==';
                    target.alt = 'Profile image not available';
                  }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">Gabe is a data analytics and business intelligence professional with a strong focus on turning data into strategic insight and compelling stories. He brings expertise in SQL, Power BI and SSRS complemented by experience in AI Agents and automation, Python for ETL, machine learning and version control via GitHub.</p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                His analytics work spans insurance, fintech, and marketing - translating complex datasets 
                into clear, actionable narratives that support decision-making and business performance. 
                Based in South Africa, he's actively exploring opportunities where data storytelling can 
                make a measurable impact.
              </p>

              <div className="bg-gradient-to-br from-[hsl(var(--brand-sage))] to-[hsl(var(--brand-sage)_/_0.8)] p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-semibold text-primary-foreground mb-2">What Sets Gabe Apart</h3>
                <div className="text-primary-foreground space-y-4">
                  <p>
                    Gabe is at the forefront of AI automation, actively building agent-based systems that transform repetitive business processes into streamlined workflows. His hands-on approach to AI development goes beyond theory - he's currently deploying agentic workflows that achieve ~90% time reduction in complex, multi-step processes.
                  </p>
                  
                  <p className="font-semibold">
                    Why this matters to your business:
                  </p>
                  
                  <p>
                    Most business workflows contain repetitive elements that can be automated through AI agents. Gabe has developed the competence to identify these automation opportunities and build custom AI solutions that deliver measurable efficiency gains. While others discuss AI potential, Gabe engineers working systems that eliminate manual bottlenecks and scale operations without additional headcount.
                  </p>
                  
                  <p>This AI-first mindset means he doesn't just analyse your data - he builds intelligent systems that continuously optimise your business processes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hard Skills */}
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-[hsl(var(--brand-sage))] to-[hsl(var(--brand-sage)_/_0.8)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-foreground">Hard Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {hardSkills.map(skill => <Badge key={skill} className="text-sm bg-[hsl(var(--brand-charcoal))] text-white hover:bg-[hsl(var(--brand-charcoal)_/_0.8)]">
                      {skill}
                    </Badge>)}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-[hsl(var(--brand-sage))] to-[hsl(var(--brand-sage)_/_0.8)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-foreground">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map(skill => <Badge key={skill} variant="outline" className="text-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                      {skill}
                    </Badge>)}
                </div>
              </CardContent>
            </Card>

            {/* Industry Experience */}
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-[hsl(var(--brand-sage))] to-[hsl(var(--brand-sage)_/_0.8)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-foreground">Industry Experience</h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map(industry => <Badge key={industry} className="text-sm bg-primary text-primary-foreground hover:bg-primary/80">
                      {industry}
                    </Badge>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;