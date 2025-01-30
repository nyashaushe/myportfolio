import { Music, Play, Award, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from "react";

// Create a single supabase client for interacting with your database
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

interface MusicSheet {
  id: string;
  title: string;
  description: string;
  price: number;
  preview_url: string;
}

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

const musicSheets: MusicSheet[] = [
  {
    id: "1",
    title: "Moonlight Sonata Arrangement",
    description: "A unique arrangement of Beethoven's famous piece",
    price: 9.99,
    preview_url: "/path-to-preview.pdf"
  },
  {
    id: "2",
    title: "Jazz Standards Collection",
    description: "Collection of popular jazz standards with original annotations",
    price: 14.99,
    preview_url: "/path-to-preview.pdf"
  }
];

export function PianoPortfolio() {
  const { toast } = useToast();
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handlePurchase = async (sheet: MusicSheet) => {
    if (!session) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to purchase music sheets",
        variant: "destructive",
      });
      return;
    }

    // Here we'll implement Stripe checkout in the next step
    toast({
      title: "Coming Soon",
      description: "Purchase functionality will be available soon!",
    });
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/piano-portfolio'
      }
    });
  };

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
          {!session && (
            <Button onClick={handleSignIn} className="mt-4">
              Sign in to Purchase Music Sheets
            </Button>
          )}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Music Sheets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {musicSheets.map((sheet) => (
              <Card key={sheet.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{sheet.title}</CardTitle>
                  <CardDescription>{sheet.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold">${sheet.price}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Preview</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{sheet.title} - Preview</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <iframe
                          src={sheet.preview_url}
                          className="w-full h-[500px]"
                          title={`Preview of ${sheet.title}`}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button onClick={() => handlePurchase(sheet)}>
                    Purchase <Download className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
