import type { Metadata } from "next";
import { Compass, Brain, Code2, Heart, Eye, Feather } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import {
  MountFade,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/ui/reveal";
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
    icon: Heart,
    title: "Your success is our success",
    description:
      "We don't win unless you do. Every engagement is measured by the outcome you get, not the hours we bill.",
  },
  {
    icon: Feather,
    title: "Craft, not just output",
    description:
      "Finishing isn't the bar - getting it right is. We focus on shipping thoughtfully crafted work rather than rushing out volume.",
  },
  {
    icon: Eye,
    title: "Transparency over comfort",
    description:
      "You can expect an honest, critical assessment - even when the truth is uncomfortable.",
  },
];

const team = [
  {
    icon: Brain,
    pillarColor: "var(--pillar-ai)",
    role: "AI Consulting",
    description:
      "Every offering is customized around the specific, real-world problems your team is currently solving.",
  },
  {
    icon: Compass,
    pillarColor: "var(--pillar-leadership)",
    role: "Leadership Coaching",
    description:
      "Tailored coaching for founders, executives, and team leads - delivering clarity and alignment where it matters most.",
  },
  {
    icon: Code2,
    pillarColor: "var(--pillar-dev)",
    role: "Web & App Development",
    description:
      "End-to-end product design and engineering - building high-quality web and mobile applications from concept to launch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-8 pt-42 pb-16 sm:px-6 lg:px-8">
        <div className="absolute top-[-15%] left-1/2 -z-10 size-128 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <MountFade className="flex flex-col items-center">
            <TreeMarkImage size={48} />
          </MountFade>
          <MountFade>
            <h1 className="text-display mt-6 text-4xl font-medium text-balance text-foreground sm:text-5xl">
              About Us
            </h1>
          </MountFade>
          <MountFade delay={0.1}>
            <p className="text-display mt-8 max-w-xl text-xl font-medium text-balance text-foreground italic sm:text-2xl">
              &ldquo;Potential is universal. Reaching it isn&apos;t.&rdquo;
            </p>
          </MountFade>
          {/* <MountFade delay={0.2}>
            <div className="mt-8 flex w-full max-w-2xl flex-col divide-y divide-border/60 sm:flex-row sm:divide-x sm:divide-y-0">
              <div className="flex flex-1 flex-col items-center gap-3 py-6 text-center sm:px-8 sm:py-0">
                <p className="max-w-56 text-sm text-muted-foreground">
                  Even the greats had a coach - Steve Jobs, Larry Page, and
                  Jeff Bezos among them.
                </p>
                <span className="text-display text-2xl font-medium text-foreground sm:text-3xl">
                  5-7x
                </span>
                <div>
                  <p className="max-w-40 text-xs text-muted-foreground">
                    return leaders see after working with a coach
                  </p>
                  <p className="mt-1 text-[10px] tracking-wide text-muted-foreground/60 uppercase">
                    ICF / PwC
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center gap-3 py-6 text-center sm:px-8 sm:py-0">
                <p className="max-w-56 text-sm text-muted-foreground">
                  AI is reshaping how fast technical expertise goes stale.
                </p>
                <span className="text-display text-2xl font-medium text-foreground sm:text-3xl">
                  2 yrs
                </span>
                <div>
                  <p className="max-w-40 text-xs text-muted-foreground">
                    how long a skill now lasts, down from decades
                  </p>
                  <p className="mt-1 text-[10px] tracking-wide text-muted-foreground/60 uppercase">
                    with AI accelerating change
                  </p>
                </div>
              </div>
            </div>
          </MountFade> */}

          <MountFade delay={0.2}>
            <p className="mt-8 max-w-3xl text-base text-muted-foreground text-balance sm:text-lg">
              That's why Ahaitu Labs exists.
              <br />
              <br />
              We coach leaders to gain clarity, navigate the AI shift, and build
              products people love.{" "}
              <span className="font-bold text-white">
                <br />
                No theorists, just proven practitioners.{" "}
              </span>
              Every single engagement is led by a hands-on practitioner who has
              been where you are. That’s the only way we work.
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
            eyebrow="Services"
            title="What we offer"
            description="Ahaitu Labs is selective by design. Practitioners lead every engagement - always."
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
        description="Tell us what you're building, and we'll reach out to explore how we can help."
      />
    </>
  );
}
