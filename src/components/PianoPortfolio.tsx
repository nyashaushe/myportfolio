import { Music, Play, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const performances = [
  {
    title: "Classical Recital",
    description: "A solo performance featuring works by Chopin and Beethoven",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    date: "2023",
  },
  {
    title: "Jazz Ensemble",
    description: "Collaborative performance with local jazz musicians",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    date: "2023",
  },
];

export function PianoPortfolio() {
  return (
    <section className="py-20 px-4 animate-fadeIn" id="piano-portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Piano Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey through classical and contemporary piano performances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <Music className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>10+ Years</CardTitle>
              <CardDescription>Of Piano Experience</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <Play className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>50+</CardTitle>
              <CardDescription>Live Performances</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <Award className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Multiple</CardTitle>
              <CardDescription>Awards & Recognition</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {performances.map((performance, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={performance.image}
                alt={performance.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{performance.title}</h3>
                <p className="text-muted-foreground mb-2">{performance.description}</p>
                <p className="text-sm text-muted-foreground">{performance.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}