"use client";

import { Container } from "@/components/ui/container"
import { WaitlistForm } from "@/components/ui/waitlist-form"

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Branding and Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Waitlist Boilerplate</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              The perfect solution for managing your product's waitlist. Simple, efficient, and user-friendly.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Join our waitlist to get notified when we launch.
            </p>
            <WaitlistForm />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Waitlist Boilerplate. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}

