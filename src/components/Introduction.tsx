import { FileDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Introduction() {
  return (
    <section className="py-20 px-4 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Video Section */}
          <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer">
            {/* Replace the src with your actual video URL */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <Play className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
          </div>

          {/* CV Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">About Me</h2>
            <p className="text-muted-foreground">
              Watch my video introduction to learn more about my journey, skills, and what drives me as a developer.
            </p>
            <div className="space-y-4">
              <Button className="w-full" size="lg">
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
    </section>
  );
}