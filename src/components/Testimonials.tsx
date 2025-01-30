import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  content: string
  author: string
  role: string
  company: string
  avatar: string
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      content: "An exceptional developer who delivers high-quality work...",
      author: "Jane Smith",
      role: "CTO",
      company: "Tech Solutions",
      avatar: "/avatars/jane.jpg"
    },
    // Add more testimonials
  ]

  return (
    <section className="py-20 px-4 bg-secondary/20 animate-fadeIn" id="testimonials">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
        What People Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6">
            <blockquote className="space-y-4">
              <p className="text-muted-foreground">{testimonial.content}</p>
              <footer className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <cite className="font-medium not-italic">{testimonial.author}</cite>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          </Card>
        ))}
      </div>
    </section>
  )
} 