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
      problem: "Manual reporting and lack of actionable insights from Google Ads campaigns were limiting lead generation efficiency and ROI optimisation.",
      solution: "Developed a dynamic, interactive Power BI dashboard with multi-dimensional filtering, KPI tracking, device performance analysis and sales funnel visualisation.",
      impact: "Identified 20% improvement potential in lead conversion efficiency and transformed reporting capabilities for data-driven decision making.",
      techStack: ["SQL", "Power BI", "DAX", "Google Ads Connector", "Power Query", "M Code"],
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Lead Scoring Model",
      category: "Motor Insurance Conversion Optimisation", 
      problem: "Manual lead prioritisation was inefficient, leading to missed opportunities and suboptimal conversion rates in motor insurance sales.",
      solution: "Created an end-to-end statistical and ML pipeline using SQL, Python and Power BI to score leads based on behavioral, demographic and engagement patterns.",
      impact: "Achieved 25% improvement potential in lead conversion efficiency and enabled predictive prioritisation for sales teams.",
      techStack: ["SQL", "Python", "Power BI", "Pandas", "Scikit-learn", "Machine Learning", "Statistical Models", "Tree-based ML Models", "Git/GitHub", "VS Code"],
      icon: <Brain className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Claims Approved in Error Analytics",
      category: "Motor Insurance Dashboard",
      problem: "Insurance claims were being wrongly approved, causing suspected financial losses with no visibility into the scale, root causes or accountability gaps.",
      solution: "Developed a dynamic, comprehensive Power BI dashboard with multi-dimensional filtering, time-series analysis and accountability tracking across error categories and decision makers.",
      impact: "Discovered ~ZAR 190 million in losses over 6 months (47% error rate), identified the decision makers primarily responsible for approving these claims in error, enabled immediate accountability measures and established ongoing monitoring to prevent future financial exposure.",
      techStack: ["SQL", "Power BI", "Power Query", "M Code", "DAX", "Database Views", "SQL Server Management Studio"],
      icon: <Shield className="h-6 w-6" />,
      color: "from-red-500 to-red-600"
    },
    {
      id: 4,
      title: "AI-Powered Social Media Automation",
      category: "What Sets Me Apart",
      problem: "Manual social media content creation and distribution was time-consuming, inconsistent and difficult to scale across multiple platforms.",
      solution: "Built an end-to-end AI agentic workflow using n8n, OpenAI GPT models and social media APIs with human-in-the-loop approval for automated content creation and publishing.",
      impact: "Delivered 95%+ time savings through scalable content production while maintaining quality control and demonstrating expertise in emerging AI agent technologies.",
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