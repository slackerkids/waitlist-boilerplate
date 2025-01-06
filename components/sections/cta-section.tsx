import { Container } from "@/components/ui/container"
import { WaitlistForm } from "@/components/ui/waitlist-form"

export function CTASection() {
  return (
    <section id="cta" className="py-24 border-t">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Ready to Transform Your Waitlist Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already streamlining their waitlist management. 
            Get early access and exclusive benefits.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
