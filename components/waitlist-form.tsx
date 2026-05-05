"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type WaitlistFormProps = {
  placeholder: string;
  buttonText: string;
  emptyMessage: string;
  invalidMessage: string;
  successMessage: string;
  configMessage: string;
};

export function WaitlistForm({
  placeholder,
  buttonText,
  emptyMessage,
  invalidMessage,
  successMessage,
  configMessage,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage(emptyMessage);
      return;
    }

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!valid) {
      setMessage(invalidMessage);
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        let errorMessage = configMessage;

        try {
          const data = (await response.json()) as { error?: string };
          if (data.error) {
            errorMessage = data.error;
          }
        } catch {
          errorMessage = configMessage;
        }

        setMessage(errorMessage);
        return;
      }

      setEmail("");
      setMessage(successMessage);
    } catch {
      setMessage(
        "Submission failed. Please check your network, Apps Script deployment access, and webhook URL.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3">
      <input
        id="waitlist-email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="h-12 rounded-full border border-white/12 bg-slate-950/70 px-5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400/60"
        placeholder={placeholder}
        type="email"
      />
      <Button size="lg" className="w-full" type="submit">
        {buttonText}
      </Button>
      <p className="min-h-6 text-sm text-slate-400">{message}</p>
    </form>
  );
}
