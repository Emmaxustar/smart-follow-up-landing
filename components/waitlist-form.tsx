"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type WaitlistFormProps = {
  placeholder: string;
  buttonText: string;
  emptyMessage: string;
  invalidMessage: string;
  successMessage: string;
};

export function WaitlistForm({
  placeholder,
  buttonText,
  emptyMessage,
  invalidMessage,
  successMessage,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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

    setMessage(successMessage);
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
