import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const { toast } = useToast();

  useEffect(() => {
    // Check if there's a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    
    // Show a toast notification when theme changes
    toast({
      title: `Theme Changed`,
      description: `Switched to ${newTheme} mode`,
      duration: 2000,
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed top-4 right-4 rounded-full w-12 h-12 
        bg-background/80 backdrop-blur-sm hover:bg-accent 
        border-2 border-border/50 shadow-lg hover:shadow-xl
        transition-all duration-500 hover:scale-110
        group overflow-hidden z-50"
      onClick={toggleTheme}
    >
      <div className="relative w-full h-full">
        <div className={`absolute inset-0 transition-transform duration-500 ease-spring
          ${theme === 'dark' ? 'translate-y-0' : 'translate-y-full'}`}>
          <Sun className="h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            text-yellow-500 animate-spin-slow" />
        </div>
        <div className={`absolute inset-0 transition-transform duration-500 ease-spring
          ${theme === 'dark' ? '-translate-y-full' : 'translate-y-0'}`}>
          <Moon className="h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            text-slate-700 dark:text-slate-400" />
        </div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}