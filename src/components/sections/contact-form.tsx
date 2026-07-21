"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/content/services";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [interest, setInterest] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          interest,
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setInterest("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <CheckCircle2 className="size-8 text-primary" />
        <h3 className="text-display text-lg font-medium text-foreground">
          Message sent
        </h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out - we read every message personally and will
          get back to you soon.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")} className="mt-2">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
            title="Enter a valid email address, e.g. name@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company (optional)</Label>
          <Input id="company" name="company" autoComplete="organization" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="interest">Interested in</Label>
          <Select value={interest} onValueChange={setInterest}>
            <SelectTrigger id="interest" className="h-9 w-full">
              <SelectValue placeholder="Choose an option" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.slug} value={service.name}>
                  {service.name}
                </SelectItem>
              ))}
              <SelectItem value="Not sure yet">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a bit about what you're working on..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong sending your message. Please try again or
          email us directly.
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"} className="h-11 w-fit px-6 text-base">
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
    </form>
  );
}
