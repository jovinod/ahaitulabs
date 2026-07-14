import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-52 pb-24 sm:px-6 sm:pt-48 sm:pb-32 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero-converge.png"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 sm:opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal className="flex items-center gap-3">
          <span className="h-px w-8 bg-border" />
          <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Leadership &middot; AI/ML &middot; Product Engineering
          </span>
          <span className="h-px w-8 bg-border" />
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-display mt-6 text-4xl font-medium text-balance text-foreground sm:text-6xl">
            Lead sharperrrrrrr. Build smarter.{" "}
            <span className="bg-linear-to-r from-primary via-primary to-pillar-dev bg-clip-text italic text-transparent">
              Ship faster.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground text-balance sm:text-lg">
            Ahaitu Labs is a multi-disciplinary studio for people and teams who
            need three things at once: better leadership judgment, real AI/ML
            fluency, and products that actually ship.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="h-11 px-6 text-base">
            <Link href="/contact">
              Start a conversation
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-11 px-6 text-base">
            <Link href="/services">Explore services</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
