import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "../ui/container"
import { Brain, Rocket, Users, Zap } from "lucide-react"

const features = [
  {
    title: "Smart Waitlist Management",
    description: "Efficiently manage your waitlist with automated queue handling and real-time updates.",
    icon: Brain,
  },
  {
    title: "Instant Notifications",
    description: "Keep your users informed with automated notifications about their waitlist status.",
    icon: Zap,
  },
  {
    title: "User Analytics",
    description: "Gain valuable insights into your waitlist demographics and user engagement patterns.",
    icon: Users,
  },
  {
    title: "Quick Setup",
    description: "Get started in minutes with our easy-to-use dashboard and customization options.",
    icon: Rocket,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Key Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our waitlist management solution simplifies the process of handling user queues
            while providing powerful tools for engagement and analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
} 