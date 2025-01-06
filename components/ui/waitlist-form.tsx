"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { WaitlistModal } from "@/components/ui/waitlist-modal"

interface WaitlistFormProps {
  className?: string
}

export function WaitlistForm({ className }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    setShowModal(true)
    setEmail("")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={`flex gap-x-4 ${className}`}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" className="px-8">
          Join Waitlist
        </Button>
      </form>
      <WaitlistModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  )
} 