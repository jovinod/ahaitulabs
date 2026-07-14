import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import type { ServiceContent } from "@/content/services";
import { pillarMeta } from "@/content/services";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function ServiceHero({ service }: { service: ServiceContent }) {
  const meta = pillarMeta[service.pillar];
  const Icon = service.icon;

  return (
    <section className="relative overflow-hidden px-4 pt-52 pb-20 sm:px-6 sm:pt-44 lg:px-8">
      <div
        className="absolute top-[-10%] left-1/2 -z-10 size-144 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: `color-mix(in oklch, ${meta.colorVar} 22%, transparent)`,
        }}
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal className="glass flex items-center gap-2.5 rounded-full px-4 py-2" y={8}>
          <Icon className="size-4" style={{ color: meta.colorVar }} />
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: meta.colorVar }}
          >
            {meta.label}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-display mt-8 text-4xl font-medium text-balance text-foreground sm:text-5xl">
            {service.tagline}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground text-balance sm:text-lg">
            {service.description}
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild className="h-12 px-7 text-base">
            <Link href="/contact">
              Start a conversation
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-12 px-7 text-base">
            <Link href="/services">All services</Link>
          </Button>
        </Reveal>

        <Reveal delay={0.45} y={0}>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2">
            {service.idealFor.slice(0, 3).map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <Check className="size-3.5" style={{ color: meta.colorVar }} />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
