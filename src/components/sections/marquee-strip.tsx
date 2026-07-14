import { Marquee } from "@/components/ui/marquee";
import { services, pillarMeta } from "@/content/services";

const items = services.flatMap((service) =>
  service.offerings.map((offering) => ({
    label: offering.title,
    color: pillarMeta[service.pillar].colorVar,
  }))
);

export function MarqueeStrip() {
  return (
    <div className="border-y border-border/60 py-6">
      <Marquee durationSeconds={37.4}>
        {Array.from({ length: 2 }).map((_, repeat) =>
          items.map((item, i) => (
            <span
              key={`${repeat}-${i}`}
              className="mx-6 flex shrink-0 items-center gap-6 sm:mx-8"
            >
              <span className="text-display text-2xl text-muted-foreground/70 sm:text-3xl">
                {item.label}
              </span>
              <span
                className="size-1.5 shrink-0 rounded-full"
                style={{ background: item.color }}
              />
            </span>
          ))
        )}
      </Marquee>
    </div>
  );
}
