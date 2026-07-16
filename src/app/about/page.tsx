import type { Metadata } from "next";
import { Compass, Brain, Code2, Heart, Eye, Feather } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { MountFade, Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { TreeMarkImage } from "@/components/brand/tree-mark-image";
import { ImageBreak } from "@/components/ui/image-break";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Ahaitu Labs exists, how we work, and the team behind our AI, leadership, and product engineering practices.",
};

const values = [
  {
    icon: Eye,
    title: "Clarity over comfort",
    description:
      "We'd rather tell you the honest read on a decision, a model, or a codebase than the comfortable one.",
  },
  {
    icon: Feather,
    title: "Craft, not just output",
    description:
      "A coaching session or a pull request is judged the same way: was it done with care, or just done.",
  },
  {
    icon: Heart,
    title: "People before frameworks",
    description:
      "Playbooks are a starting point. The actual person or team in front of us is what shapes the work.",
  },
];

const team = [
  {
    icon: Brain,
    pillarColor: "var(--pillar-ai)",
    role: "AI Consulting Lead",
    description:
      "Designs our applied AI/ML curriculum and leads hands-on build sessions with engineering teams.",
  },
  {
    icon: Compass,
    pillarColor: "var(--pillar-leadership)",
    role: "Leadership Coaching Lead",
    description:
      "Leads our executive and team coaching practice, working directly with founders and managers.",
  },
  {
    icon: Code2,
    pillarColor: "var(--pillar-dev)",
    role: "Engineering Lead",
    description:
      "Leads product design and engineering delivery across our web and app development projects.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-8 pt-42 pb-16 sm:px-6 lg:px-8">
        <div className="absolute top-[-15%] left-1/2 -z-10 size-128 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <MountFade className="flex flex-col items-center">
            <TreeMarkImage size={48} />
          </MountFade>
          <MountFade>
            <h1 className="text-display mt-6 text-4xl font-medium text-balance text-foreground sm:text-5xl">
              Why Ahaitu Labs exists
            </h1>
          </MountFade>
          <MountFade delay={0.1}>
            <p className="mt-6 text-base text-muted-foreground text-balance sm:text-lg">
              We kept seeing the same pattern: teams with strong technical
              talent but shaky leadership, or strong leaders with no real
              grip on AI, or great product ideas that never got built well.
              Ahaitu Labs exists to close all three gaps under one roof.
            </p>
          </MountFade>
        </div>
      </section>

      <section className="px-8 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <MountFade delay={0.2} className="flex flex-col gap-6 text-base text-muted-foreground">
            <p>
              Most people don&apos;t need three separate vendors - a coach, an
              AI consultant, and a dev shop - who&apos;ve never spoken to each
              other and give conflicting advice. They need one studio that
              understands how leadership, technical fluency, and execution
              actually connect.
            </p>
            <p>
              That&apos;s the premise Ahaitu Labs is built on: a small team of
              practitioners across three disciplines, working from the same
              operating principles, so the coaching you get and the product
              we build together are pulling in the same direction.
            </p>
          </MountFade>
        </div>
      </section>

      <ImageBreak
        src="/images/studio.png"
        alt="A calm, modern studio office at dusk with city lights beyond the windows"
      />

      <section className="px-8 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="left"
            eyebrow="Values"
            title="What we hold ourselves to"
          />
          <Reveal delay={0.1}>
            <div className="glass mt-14 flex flex-col divide-y divide-border/60 rounded-[1.75rem] lg:flex-row lg:divide-x lg:divide-y-0">
              {values.map((value) => (
                <div key={value.title} className="flex-1 p-8 sm:p-9">
                  <value.icon className="size-5 text-primary" />
                  <h3 className="text-display mt-5 text-lg font-medium text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-8 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="left"
            eyebrow="Team"
            title="The practice leads"
            description="Ahaitu Labs is a small, hands-on team - every engagement is led by a practitioner, not handed off to a junior bench."
          />
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {team.map((member) => (
              <StaggerItem
                key={member.role}
                className="glass flex flex-col items-center rounded-[1.5rem] p-8 text-center"
              >
                <div
                  className="flex size-14 items-center justify-center rounded-full"
                  style={{
                    background: `color-mix(in oklch, ${member.pillarColor} 16%, transparent)`,
                  }}
                >
                  <member.icon
                    className="size-6"
                    style={{ color: member.pillarColor }}
                  />
                </div>
                <h3 className="text-display mt-5 text-base font-medium text-foreground">
                  {member.role}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {member.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaBand
        title="Curious if we're the right fit?"
        description="Tell us what you're working on and we'll tell you honestly whether we can help."
      />
    </>
  );
}
