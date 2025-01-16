"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "../ui/mode-toggle"

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "#pricing" },
  // { title: "About", href: "#about" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between md:justify-center">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-lg ml-4">
              Waitlist Boilerplate
            </span>
          </Link>
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      href={item.href}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center space-x-2 md:absolute md:right-4">
            <ModeToggle />
            <Button asChild className="hidden md:inline-flex" size="sm">
              <Link href="#cta">Join now!</Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pl-1 pr-0">
                <SheetTitle />
                <MobileNav items={navigationItems} setIsOpen={setIsOpen} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileNav({ items, setIsOpen }: { items: typeof navigationItems; setIsOpen: (open: boolean) => void }) {
  return (
    <div className="flex flex-col space-y-3 mt-4 px-2">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="text-foreground/70 transition-colors hover:text-foreground"
          onClick={() => setIsOpen(false)}
        >
          {item.title}
        </Link>
      ))}
      <Button asChild className="mt-4" size="sm">
        <Link href="#signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
      </Button>
    </div>
  )
}

