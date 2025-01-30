import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code2, Palette, Rocket, Server } from "lucide-react"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

export function Services() {
  const services: Service[] = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Fronted Web Development",
      description: "Building responsive and top performing web applications using modern technologies."
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Automations with AI tool",
      description: "Creating robust and scalable workflows to scale down monotonous high value tasks."
    },
    // Add more services
  ]

  return (
    <section className="py-20 px-4 animate-fadeIn" id="services">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 text-primary">{service.icon}</div>
              <CardTitle className="mb-2">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
} 