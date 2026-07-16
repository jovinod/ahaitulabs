import type { Metadata } from "next";
import { Mail, Clock } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ahaitu Labs about AI consulting, leadership coaching, or app & web development.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden px-8 py-24 pt-44 sm:px-6 lg:px-8">
      <div className="absolute top-[-15%] left-1/4 -z-10 size-112 rounded-full bg-primary/15 blur-3xl" />
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-border" />
            <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Contact
            </span>
          </div>
          <h1 className="text-display mt-5 text-3xl font-medium text-balance text-foreground sm:text-4xl">
          Get in Touch
          </h1>
          <p className="mt-4 max-w-md text-base text-muted-foreground text-balance">
            Share a few details about your current initiatives or goals. Leave your contact information below, and we will reach out to discuss how we can best support your needs.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-sm text-foreground"
            >
              <Mail className="size-4 text-primary" />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="size-4 text-primary" />
              We typically reply within 24 hours
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-[1.75rem] p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
