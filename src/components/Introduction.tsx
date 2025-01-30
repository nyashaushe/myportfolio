import { FileDown, Play, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function Introduction() {
  const [videoOpen, setVideoOpen] = useState(false);
  const { toast } = useToast();

  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/assets/documents/Nyasha Shepard Ushewokunze - Resume (Current).docx.pdf';
    link.download = 'Nyasha Shepard Ushewokunze - Resume (Current).pdf';
    
    // Attempt to download
    try {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download Started",
        description: "Your CV download should begin shortly.",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error downloading the CV. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <section className="py-12 px-4 animate-fadeIn flex items-center justify-center min-h-[70vh]" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 hover:text-primary transition-colors">
          About Me
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Full Stack Developer with expertise in React, Node.js, and modern web technologies.
          Passionate about creating efficient, scalable, and user-friendly applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Video Preview Section */}
          <div className="space-y-3 group">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              Watch My Introduction
            </h3>
            <p className="text-muted-foreground mb-3">
              Learn more about my journey and what drives me as a developer.
            </p>
            <div 
              className="relative aspect-video rounded-lg overflow-hidden cursor-pointer 
                transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setVideoOpen(true)}
            >
              {/* Video Preview/Trailer */}
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/videos/thumbnail.jpg"
              >
                <source src="/assets/videos/preview.mp4" type="video/mp4" />
              </video>
              
              {/* Overlay with Play Button */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                flex items-center justify-center group-hover:from-black/70 group-hover:via-black/30 transition-all duration-300">
                <div className="rounded-full bg-white/90 p-4 transform hover:scale-110 hover:bg-primary transition-all duration-300
                  shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.6)]">
                  <Play className="w-8 h-8 text-primary group-hover:text-white fill-current transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* CV Section */}
          <div className="space-y-3 group">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              Download My CV
            </h3>
            <p className="text-muted-foreground mb-3">
              View my complete experience and qualifications.
            </p>
            <div 
              className="relative aspect-video rounded-lg overflow-hidden cursor-pointer 
                bg-gradient-to-br from-secondary/30 to-secondary/10 
                transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={handleDownloadCV}
            >
              {/* CV Preview */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6
                group-hover:scale-[0.98] transition-transform duration-300">
                <FileText className="w-16 h-16 text-primary mb-4 animate-pulse group-hover:animate-none" />
                <h4 className="text-lg font-medium group-hover:text-primary transition-colors">
                  Nyasha Shepard Ushewokunze
                </h4>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
              
              {/* Overlay with Download Button */}
              <div className="absolute inset-0 bg-black/0 flex items-center justify-center 
                group-hover:bg-black/5 transition-all duration-300">
                <div className="rounded-full p-4 transform scale-75 opacity-0 
                  group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <div className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full
                    shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]
                    transform hover:scale-105 transition-all duration-300">
                    <FileDown className="w-5 h-5 animate-bounce" />
                    <span>Download CV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl transform duration-300 animate-in fade-in-0 zoom-in-95">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold hover:text-primary transition-colors">
              Video Introduction
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
            <video
              className="w-full h-full rounded-lg"
              controls
              src="/assets/videos/introduction.mp4"
              poster="/assets/videos/thumbnail.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}