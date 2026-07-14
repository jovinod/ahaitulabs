import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services, pillarMeta } from "@/content/services";
import { Reveal } from "@/components/ui/reveal";

const indices = ["01", "02", "03"];

export function PillarsOverview() {
  return (
    <section className="px-8 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-border" />
              <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                What we do
              </span>
            </div>
            <h2 className="text-display max-w-lg text-3xl font-medium text-balance text-foreground sm:text-4xl">
              Three practices. One studio.
            </h2>
          </div>
          <br/>
          <p className="max-w-sm text-sm text-muted-foreground sm:text-right">
            Each pillar stands on its own, and each is built to reinforce the
            others.
          </p>
        </Reveal>

        <div className="mt-14 border-t border-border/70">
          {services.map((service, i) => {
            const meta = pillarMeta[service.pillar];
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group -mx-4 grid grid-cols-[2.5rem_1fr] items-center gap-5 border-b border-border/70 px-4 py-9 transition-colors hover:bg-card/50 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-8"
                >
                  <span className="text-display text-2xl text-muted-foreground/35 sm:text-4xl">
                    {indices[i]}
                  </span>

                  <div>
                    <div className="flex items-center gap-3">
                      <div
                        className="flex size-9 shrink-0 items-center justify-center rounded-full sm:hidden"
                        style={{
                          background: `color-mix(in oklch, ${meta.colorVar} 18%, transparent)`,
                        }}
                      >
                        <Icon className="size-4" style={{ color: meta.colorVar }} />
                      </div>
                      <h3 className="text-display text-xl font-medium text-foreground sm:text-2xl">
                        {service.name}
                      </h3>
                    </div>
                    <p className="mt-2 max-w-lg text-sm text-muted-foreground sm:text-base">
                      {service.summary}
                    </p>
                  </div>

                  <div className="col-span-2 mt-2 flex items-center gap-3 sm:col-span-1 sm:mt-0">
                    <div
                      className="hidden size-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 sm:flex"
                      style={{
                        background: `color-mix(in oklch, ${meta.colorVar} 18%, transparent)`,
                      }}
                    >
                      <Icon className="size-5" style={{ color: meta.colorVar }} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                      Learn more
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
