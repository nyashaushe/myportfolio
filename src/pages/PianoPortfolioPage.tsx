import { PianoPortfolio } from "@/components/PianoPortfolio";
import { ThemeToggle } from "@/components/ThemeToggle";

const PianoPortfolioPage = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <PianoPortfolio />
    </main>
  );
};

export default PianoPortfolioPage;