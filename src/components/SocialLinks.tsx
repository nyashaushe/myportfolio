import { Facebook, Linkedin, Twitter, Instagram, Youtube, Github, Globe, Video, Mail, Phone, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  tooltip?: string;
}

export function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+263712672820",
      label: "Phone",
      tooltip: "+263 712 672 820"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:mrshepard18@gmail.com",
      label: "Email",
      tooltip: "mrshepard18@gmail.com"
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      href: "https://www.facebook.com/nyasha.ushewokunze.33",
      label: "Facebook"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/nyashaushewokunze/",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/mrshepard18",
      label: "Twitter"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/nyashaushe23/",
      label: "Instagram"
    },
    {
      icon: <Video className="h-5 w-5" />,
      href: "https://www.tiktok.com/@nyashaushe23",
      label: "TikTok"
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      href: "https://www.youtube.com/@nyashushe",
      label: "YouTube"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/nyashaushe",
      label: "GitHub"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      href: "https://nyashaushe.github.io/portifolio/",
      label: "Portfolio"
    },
    {
      icon: <FileDown className="h-5 w-5" />,
      href: "/assets/documents/Nyasha Shepard Ushewokunze - Resume (Current).docx.pdf",
      label: "CV",
      tooltip: "Download CV"
    }
  ];

  return (
    <TooltipProvider>
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((link) => (
          <Tooltip key={link.label}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:text-primary hover:border-primary transition-colors"
                asChild
              >
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </Button>
            </TooltipTrigger>
            {link.tooltip && (
              <TooltipContent>
                <p>{link.tooltip}</p>
              </TooltipContent>
            )}
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
} 