import { FileDown, Play } from "lucide-react";
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
    // Replace this URL with your actual CV file URL
    const cvUrl = "/path-to-your-cv.pdf";
    
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "developer-cv.pdf";
    document.body.appendChild(link);
    
    // Trigger download
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download started",
      description: "Your CV download should begin shortly.",
    });
  };

  return (
    <section className="py-20 px-4 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Video Section */}
          <div 
            className="relative aspect-video bg-secondary rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer hover:shadow-xl transition-all duration-300"
            onClick={() => setVideoOpen(true)}
          >
            {/* Video Thumbnail - Replace src with your actual thumbnail */}
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
              alt="Video thumbnail"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <Play className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
          </div>

          {/* CV Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">About Me</h2>
            <p className="text-muted-foreground">
              Watch my video introduction to learn more about my journey, skills, and what drives me as a developer. 
              With over [X] years of experience in web development, I specialize in building scalable and user-friendly applications.
            </p>
            <div className="space-y-4">
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleDownloadCV}
              >
                <FileDown className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                PDF format, 2MB
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Video Introduction</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            {/* Replace src with your actual video URL */}
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/your-video-id"
              title="Developer Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}