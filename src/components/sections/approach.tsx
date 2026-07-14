import { Layers, ShieldCheck, Target, Repeat } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

const principles = [
  {
    icon: Target,
    title: "Grounded in practice",
    description:
      "We coach and build inside your real context - your team, your codebase, your decisions - not generic playbooks.",
  },
  {
    icon: Layers,
    title: "Built to scale",
    description:
      "Systems, code, and habits are designed to outlast the engagement, not depend on us being in the room.",
  },
  {
    icon: ShieldCheck,
    title: "Radically transparent",
    description:
      "Clear process, clear scope, clear handoff. No black boxes in the coaching or the codebase.",
  },
  {
    icon: Repeat,
    title: "Outcomes over hours",
    description:
      "We measure success by what changes after we're gone - better decisions, working software, real capability.",
  },
];

export function Approach() {
  return (
    <section className="px-8 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex items-center gap-3">
          <span className="h-px w-8 bg-border" />
          <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            How we work
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-display mt-4 max-w-lg text-3xl font-medium text-balance text-foreground sm:text-4xl">
            A studio, not a vendor
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="glass mt-14 flex flex-col divide-y divide-border/60 rounded-[1.75rem] lg:flex-row lg:divide-x lg:divide-y-0">
            {principles.map((principle) => (
              <div key={principle.title} className="flex-1 p-8 sm:p-9">
                <principle.icon className="size-5 text-primary" />
                <h3 className="text-display mt-5 text-lg font-medium text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2.5 text-sm text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
