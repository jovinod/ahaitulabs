import { Check } from "lucide-react";

import type { ServiceContent } from "@/content/services";
import { pillarMeta } from "@/content/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Reveal } from "@/components/ui/reveal";

export function ServiceOfferings({ service }: { service: ServiceContent }) {
  const meta = pillarMeta[service.pillar];

  return (
    <section className="px-8 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What's included" title="How the engagement is structured" />
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {service.offerings.map((offering, i) => {
            const Icon = offering.icon;
            return (
              <Reveal key={offering.title} delay={i * 0.08}>
                <SpotlightCard className="h-full">
                  <div
                    className="flex size-11 items-center justify-center rounded-xl"
                    style={{
                      background: `color-mix(in oklch, ${meta.colorVar} 16%, transparent)`,
                    }}
                  >
                    <Icon className="size-5" style={{ color: meta.colorVar }} />
                  </div>
                  <h3 className="mt-5 text-display text-lg font-medium text-foreground">
                    {offering.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {offering.description}
                  </p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServiceProcess({ service }: { service: ServiceContent }) {
  const meta = pillarMeta[service.pillar];

  return (
    <section className="px-8 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Process" title="How we work together" align="left" />
        <div className="mt-12 flex flex-col">
          {service.process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="flex gap-5 border-b border-border/60 py-6 last:border-0">
                <div
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-medium"
                  style={{
                    borderColor: `color-mix(in oklch, ${meta.colorVar} 40%, transparent)`,
                    color: meta.colorVar,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-display text-base font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceOutcomes({ service }: { service: ServiceContent }) {
  const meta = pillarMeta[service.pillar];

  return (
    <section className="px-8 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="text-display text-2xl font-medium text-foreground">
            Who this is for
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            {service.idealFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Check
                  className="mt-0.5 size-4 shrink-0"
                  style={{ color: meta.colorVar }}
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-display text-2xl font-medium text-foreground">
            What you walk away with
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            {service.outcomes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Check
                  className="mt-0.5 size-4 shrink-0"
                  style={{ color: meta.colorVar }}
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
