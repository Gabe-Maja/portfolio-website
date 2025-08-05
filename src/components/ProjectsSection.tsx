import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Brain, Shield, Zap } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Google Ads Performance Dashboard",
      category: "Lead Generation Analysis",
      problem: "Manual reporting and lack of actionable insights from Google Ads campaigns were limiting lead generation efficiency and ROI optimization.",
      solution: "Developed an interactive Power BI dashboard with multi-dimensional filtering, KPI tracking, device performance analysis, and sales funnel visualization.",
      impact: "Identified 20% improvement potential in lead conversion efficiency and transformed reporting capabilities for data-driven decision making.",
      techStack: ["SQL", "Power BI", "DAX", "Google Ads Connector", "Power Query", "M Code"],
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Lead Scoring Model",
      category: "Motor Insurance Conversion Optimization", 
      problem: "Manual lead prioritization was inefficient, leading to missed opportunities and suboptimal conversion rates in motor insurance sales.",
      solution: "Created an end-to-end statistical and ML pipeline using SQL, Python, and Power BI to score leads based on behavioral, demographic, and engagement patterns.",
      impact: "Achieved 25% improvement potential in lead conversion efficiency and enabled predictive prioritization for sales teams.",
      techStack: ["SQL", "Python", "Pandas", "Scikit-learn", "Power BI", "XGBoost", "Git/GitHub"],
      icon: <Brain className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Claims Approved in Error Analytics",
      category: "Motor Insurance Dashboard",
      problem: "Erroneously approved insurance claims were causing significant financial losses (ZAR 189.8 million over 6 months) with no clear visibility into root causes.",
      solution: "Developed a comprehensive Power BI dashboard with multi-dimensional filtering, time-series analysis, and accountability tracking across error categories and decision makers.",
      impact: "Quantified financial exposure, enabled accountability, and projected significant annual savings through process optimization.",
      techStack: ["SQL", "Power BI", "Power Query", "M Code", "DAX", "Database Views", "Stored Procedures"],
      icon: <Shield className="h-6 w-6" />,
      color: "from-red-500 to-red-600"
    },
    {
      id: 4,
      title: "AI-Powered Social Media Automation",
      category: "What Sets Me Apart",
      problem: "Manual social media content creation and distribution was time-consuming, inconsistent, and difficult to scale across multiple platforms.",
      solution: "Built an end-to-end AI agentic workflow using n8n, OpenAI GPT models, and social media APIs with human-in-the-loop approval for automated content creation and publishing.",
      impact: "Achieved significant time savings, scalable content production, and maintained quality control while demonstrating expertise in emerging AI agent technologies.",
      techStack: ["n8n", "OpenAI GPT-4", "Telegram Bot API", "Social Media APIs", "AI Image Generation", "Workflow Automation"],
      icon: <Zap className="h-6 w-6" />,
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;