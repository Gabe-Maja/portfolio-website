import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Brain, Shield, Zap, ExternalLink } from "lucide-react";
import { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";
import { projectDetailsData } from "@/data/projectDetails";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: "Google Ads Performance Dashboard",
      category: "Lead Generation Analysis",
      problem: "The marketing team lacked a clear, dynamic view into whether their Google Ads investment was effectively driving qualified leads and contributing to actual sales conversions. This represented a critical gap in marketing ROI visibility requiring immediate investigation.",
      solution: "Developed a comprehensive Power BI analytics dashboard powered by Google Ads data with multi-dimensional filtering, KPI tracking, device performance analysis, sales funnel visualization, and keyword insights.",
      impact: "Identified 20% improvement potential by uncovering high-performing device and keyword combinations, revealed critical device insights, and transformed reporting capabilities from static Excel to self-serve analytics platform.",
      techStack: ["SQL", "Power BI", "DAX", "Google Ads Connector", "Power Query", "M Code"],
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Lead Scoring Model",
      category: "Motor Insurance Conversion Optimisation", 
      problem: "The sales and operations teams discovered a critical efficiency gap: while marketing efforts were generating large lead volumes, there was no data-driven methodology to prioritise leads with the highest conversion potential. This represented a massive opportunity cost requiring immediate analytical intervention.",
      solution: "Developed a comprehensive, end-to-end lead scoring framework combining statistical analysis, machine learning and business intelligence using SQL, Python and Power BI with advanced feature engineering, statistical validation, and ML pipeline.",
      impact: "Quantified 25% conversion improvement potential by precisely identifying high-performing lead profiles, revealed critical engagement patterns, and enabled predictive prioritisation with interpretable, statistically-validated methodology.",
      techStack: ["SQL", "Python", "Power BI", "Pandas", "Scikit-learn", "Machine Learning", "Tree-based ML Models", "Git/GitHub", "VS Code"],
      icon: <Brain className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Claims Approved in Error Analytics",
      category: "Motor Insurance Dashboard",
      problem: "The motor insurance company discovered a critical operational failure: claims were being systematically approved and paid out to policyholders who didn't have the relevant coverage in their policies. This represented a massive financial leak requiring immediate investigation.",
      solution: "Developed a comprehensive Power BI analytics dashboard with multi-dimensional filtering across 5 error categories, product types, claim categories, and decision makers with time-series trend analysis for maximum investigative flexibility and root-cause analysis.",
      impact: "Discovered ZAR 189.8 million in losses over 6 months (47.2% error rate across 4,658 claims), identified decision makers primarily responsible for processing errors, and enabled immediate accountability measures with projected annual savings of ZAR 380+ million.",
      techStack: ["SQL", "Power BI", "Power Query", "M Code", "DAX", "Database Views", "SQL Server Management Studio"],
      icon: <Shield className="h-6 w-6" />,
      color: "from-red-500 to-red-600"
    },
    {
      id: 4,
      title: "AI-Powered Social Media Automation",
      category: "What Sets Me Apart",
      problem: "Modern businesses face a critical challenge in maintaining consistent, engaging social media presence across multiple platforms while managing limited time and resources. Manual content creation and distribution represents a massive operational bottleneck.",
      solution: "Built an end-to-end AI agentic workflow using n8n that combines RSS feed monitoring, AI-generated copy and visual content, human-in-the-loop approval via Telegram bot and automated publishing to Instagram, Facebook, Twitter, LinkedIn, and YouTube.",
      impact: "Reduced manual social media management from 8+ hours weekly to 15-minute approval sessions (95%+ time savings), enabled scalable content production across 5+ channels simultaneously, and demonstrated expertise in emerging AI agent technologies.",
      techStack: ["n8n", "OpenAI GPT-4", "Google APIs", "Telegram Bot API", "Multi-platform Social Media APIs", "AI Image Generation", "RSS Feed Integration", "Webhook Management", "Workflow Automation", "Cloud Storage Integration"],
      icon: <Zap className="h-6 w-6" />,
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const handleTakeDeepDive = (projectId: number) => {
    const projectDetail = projectDetailsData.find(p => p.id === projectId);
    if (projectDetail) {
      setSelectedProject(projectDetail);
      setIsModalOpen(true);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[hsl(var(--brand-sage)_/_0.3)] to-[hsl(var(--brand-sage)_/_0.6)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Case studies showcasing data-driven solutions with measurable business impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} text-white mb-4`}>
                      {project.icon}
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-sm text-primary font-medium mb-4">
                    {project.category}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Problem → Solution → Impact */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Problem</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Impact</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Take a Deeper Dive Button */}
                  <div className="pt-4 border-t border-border">
                    <Button 
                      onClick={() => handleTakeDeepDive(project.id)}
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Take a Deeper Dive
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ProjectsSection;