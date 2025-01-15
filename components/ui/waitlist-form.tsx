"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WaitlistModal } from "@/components/ui/waitlist-modal";
import type { SubmissionStatus, WaitlistFormProps } from "@/types";

export function WaitlistForm({ className }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.error?.includes("already") ? "duplicate" : "error");
        setMessage(data.error || data.message);
        setEmail("");
        return;
      }
      setStatus("success");
      setMessage(data.message);
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
      setShowModal(true);
    }
  };

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
          disabled={loading}
        />
        <Button type="submit" className="px-8" disabled={loading}>
          {loading ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>
      <WaitlistModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        status={status}
        message={message}
      />
    </>
  );
}
