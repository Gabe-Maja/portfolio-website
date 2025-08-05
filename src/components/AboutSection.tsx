import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const hardSkills = [
    "SQL",
    "Power BI", 
    "SSRS",
    "MS Excel",
    "Google Sheets",
    "Python",
    "Machine Learning",
    "Azure",
    "Databricks",
    "Git",
    "GitHub",
    "AI & Automation"
  ];

  const softSkills = [
    "Communication",
    "Leadership", 
    "Teamwork & Collaboration",
    "Problem-Solving",
    "Time Management"
  ];

  const industries = [
    "Insurance",
    "Fintech",
    "Marketing"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-emerald-50/10" aria-label="About Gabriel Maja section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-primary">Gabe</span>
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
                  src="/media/gabe.jpg"
                  alt="Professional headshot of Gabriel Maja, Data Analyst and Automation Specialist"
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Gabe is a data analytics and business intelligence professional with a strong focus on 
                turning data into strategic insight and compelling stories. He brings expertise in SQL, 
                Power BI, and SSRS, along with experience using Python for ETL, machine learning, and 
                version control via GitHub.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                His analytics work spans insurance, fintech, and marketing - translating complex datasets 
                into clear, actionable narratives that support decision-making and business performance. 
                Based in South Africa, he's actively exploring opportunities where data storytelling can 
                make a measurable impact.
              </p>

              <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-semibold text-primary mb-2">What Sets Gabe Apart</h3>
                <p className="text-muted-foreground">
                  Gabe is a curious individual actively learning about new AI innovations and exploring 
                  how they can automate processes, make workflows more efficient, and increase quality. 
                  This forward-thinking approach allows him to stay at the forefront of data analytics innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hard Skills */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Hard Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {hardSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Industry Experience */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Industry Experience</h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <Badge key={industry} className="text-sm">
                      {industry}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;