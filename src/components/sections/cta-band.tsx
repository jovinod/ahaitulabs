import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { TreeMarkImage } from "@/components/brand/tree-mark-image";

interface CtaBandProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function CtaBand({
  title = "Let's figure out where to start.",
  description = "One short conversation is usually enough to know whether coaching, a build, or both is the right fit.",
  primaryLabel = "Start a conversation",
  primaryHref = "/contact",
}: CtaBandProps) {
  return (
    <section className="px-8 pb-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-16">
          <div className="absolute left-1/2 top-0 -z-10 size-112 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />
          <div className="relative flex flex-col items-center">
            <TreeMarkImage size={68} />
            <h2 className="text-display mx-auto mt-6 max-w-xl text-3xl font-medium text-balance text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground text-balance">
              {description}
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild className="h-12 px-7 text-base">
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
