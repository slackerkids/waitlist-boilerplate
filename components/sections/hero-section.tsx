import { Badge } from "@/components/ui/badge"
import { WaitlistForm } from "@/components/ui/waitlist-form"

export default function HeroSection() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Badge variant="secondary" className="h-6 items-center rounded-full px-3 text-sm font-semibold">
            Coming Soon
          </Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Join the Waitlist for Our Revolutionary Product
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Be the first to experience our game-changing solution. Sign up now and get early access when we launch.
          </p>
          <div className="w-full max-w-sm space-y-2">
            <WaitlistForm />
            <p className="text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

