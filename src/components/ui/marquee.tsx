import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  durationSeconds?: number;
  reverse?: boolean;
}

export function Marquee({
  children,
  className,
  durationSeconds = 28,
  reverse = false,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 items-center motion-safe:animate-[marquee_var(--marquee-duration)_linear_infinite] group-hover:[animation-play-state:paused]",
            reverse && "motion-safe:[animation-direction:reverse]"
          )}
          style={{ ["--marquee-duration" as string]: `${durationSeconds}s` }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
