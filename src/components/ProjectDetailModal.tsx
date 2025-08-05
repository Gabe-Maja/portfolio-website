import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, TrendingUp, Code2 } from "lucide-react";

interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  intro: string;
  problem: string;
  approach: string;
  impact: string[];
  techStack: string[];
  skills: string[];
  fullDetails: {
    problemDetails: string[];
    approachDetails: string[];
    impactDetails: string[];
  };
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {project.title}
          </DialogTitle>
          <p className="text-lg text-muted-foreground">{project.category}</p>
        </DialogHeader>
        
        <ScrollArea className="max-h-[75vh] pr-4">
          <div className="space-y-6">
            {/* Introduction */}
            <Card>
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed">{project.intro}</p>
              </CardContent>
            </Card>

            {/* The Problem */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-red-500" />
                <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">The Problem</h3>
              </div>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{project.problem}</p>
                  {project.fullDetails.problemDetails.length > 0 && (
                    <ul className="space-y-2">
                      {project.fullDetails.problemDetails.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* The Approach */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-5 w-5 text-blue-500" />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">The Approach</h3>
              </div>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{project.approach}</p>
                  {project.fullDetails.approachDetails.length > 0 && (
                    <ul className="space-y-2">
                      {project.fullDetails.approachDetails.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Impact */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-emerald-500" />
                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">Impact</h3>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {project.impact.map((impactItem, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{impactItem}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator />

            {/* Tech Stack & Skills */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Skills Applied</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;