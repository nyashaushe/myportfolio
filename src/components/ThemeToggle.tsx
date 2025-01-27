import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const { toast } = useToast();

  useEffect(() => {
    // Check system preference
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    // Get saved theme or use system preference
    const savedTheme = localStorage.getItem("theme") || systemPreference;
    setTheme(savedTheme as "light" | "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    
    toast({
      title: `Theme Changed`,
      description: `Switched to ${newTheme} mode`,
      duration: 2000,
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4 rounded-full w-10 h-10 bg-background hover:bg-accent transition-colors duration-300"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 animate-rotate-sun text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 dark:text-slate-400" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}