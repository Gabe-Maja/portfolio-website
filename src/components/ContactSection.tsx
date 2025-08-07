import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, Linkedin, FileText, Download, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ContactSection = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pdfError, setPdfError] = useState<boolean>(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPdfError(false);
  }

  function onDocumentLoadError(): void {
    setPdfError(true);
  }

  const email = "gabemaja10@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/gabriel-kevin-maja/";
  const resumeUrl = "/media/CV - Gabriel Maja 2025.pdf";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleLinkedInClick = () => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Gabriel_Maja_Resume_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[hsl(var(--brand-sage)_/_0.3)] to-[hsl(var(--brand-sage)_/_0.6)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to discuss how I can help drive data-driven insights and automation solutions for your organization? Let's start the conversation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Methods */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Email Me</h3>
                  <p className="text-muted-foreground text-center">
                    Drop me a line and I'll get back to you within 24 hours
                  </p>
                  <Button 
                    onClick={handleEmailClick}
                    className="w-full group-hover:scale-105 transition-transform"
                    size="lg"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {email}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Connect on LinkedIn</h3>
                  <p className="text-muted-foreground text-center">
                    Let's expand our professional networks and stay connected
                  </p>
                  <Button 
                    onClick={handleLinkedInClick}
                    variant="outline"
                    className="w-full group-hover:scale-105 transition-transform"
                    size="lg"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    View Profile
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleEmailClick}
              size="lg"
              className="px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View My Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                <DialogHeader>
                  <DialogTitle className="flex items-center justify-between">
                    <span>Gabriel Maja - Resume</span>
                    <Button
                      onClick={handleDownloadResume}
                      variant="outline"
                      size="sm"
                      className="ml-4"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="overflow-auto max-h-[70vh]">
                  {pdfError ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        Unable to display PDF preview. Please download the file instead.
                      </p>
                      <Button onClick={handleDownloadResume}>
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Document
                        file={resumeUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                        loading={
                          <div className="flex items-center justify-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                            <span className="ml-2 text-muted-foreground">Loading resume...</span>
                          </div>
                        }
                      >
                        <Page 
                          pageNumber={pageNumber} 
                          width={Math.min(600, window.innerWidth - 100)}
                          renderTextLayer={true}
                          renderAnnotationLayer={true}
                        />
                      </Document>
                      
                      {numPages && numPages > 1 && (
                        <div className="flex items-center gap-4 mt-4">
                          <Button
                            onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                            disabled={pageNumber <= 1}
                            variant="outline"
                            size="sm"
                          >
                            Previous
                          </Button>
                          <span className="text-sm text-muted-foreground">
                            Page {pageNumber} of {numPages}
                          </span>
                          <Button
                            onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
                            disabled={pageNumber >= numPages}
                            variant="outline"
                            size="sm"
                          >
                            Next
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;