import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services, pillarMeta } from "@/content/services";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MountFade, Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { TreeMarkImage } from "@/components/brand/tree-mark-image";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Leadership coaching, AI/ML coaching, and app & web development - three practices, one studio.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-8 pt-42 pb-16 sm:px-6 lg:px-8">
        <div className="absolute top-[-15%] left-1/2 -z-10 size-128 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <MountFade className="flex flex-col items-center">
            <TreeMarkImage size={48} />
          </MountFade>
          <MountFade delay={0.1}>
            <h1 className="text-display mt-6 text-4xl font-medium text-balance text-foreground sm:text-5xl">
              Three ways to work with us
            </h1>
          </MountFade>
          <MountFade delay={0.2}>
            <p className="mt-6 text-base text-muted-foreground text-balance sm:text-lg">
              Engage one pillar or combine them - leaders who understand AI, and
              products built by people who know how to ship.
            </p>
          </MountFade>
        </div>
      </section>

      <section className="px-8 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          {services.map((service, i) => {
            const meta = pillarMeta[service.pillar];
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={i * 0.08}>
                <SpotlightCard className="p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col gap-4 md:max-w-lg">
                      <div
                        className="flex size-11 items-center justify-center rounded-xl"
                        style={{
                          background: `color-mix(in oklch, ${meta.colorVar} 16%, transparent)`,
                        }}
                      >
                        <Icon className="size-5" style={{ color: meta.colorVar }} />
                      </div>
                      <div>
                        <h2 className="text-display text-xl font-medium text-foreground">
                          {service.name}
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {service.summary}
                        </p>
                      </div>
                      <Button asChild variant="outline" className="w-fit">
                        <Link href={`/services/${service.slug}`}>
                          Explore {service.name}
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </Button>
                    </div>

                    <ul className="flex flex-col gap-3 md:min-w-70">
                      {service.offerings.map((offering) => (
                        <li
                          key={offering.title}
                          className="rounded-xl border border-border/60 bg-background/40 px-4 py-3 text-sm text-foreground"
                        >
                          {offering.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
