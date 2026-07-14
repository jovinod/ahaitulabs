"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function TreeMarkVideo({
  size = 30,
  blend = false,
  delay = 0,
  className,
}: {
  size?: number;
  blend?: boolean;
  /** Seconds to wait before starting playback. */
  delay?: number;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || delay <= 0) return;

    video.pause();
    const timeout = setTimeout(() => {
      video.play().catch(() => {});
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <span
      className={cn(
        "inline-block shrink-0 overflow-hidden rounded-full",
        blend,
        className
      )}
      style={{ width: size, height: size }}
    >
      <video
        ref={videoRef}
        width={size}
        height={size}
        autoPlay={delay <= 0}
        muted
        playsInline
        aria-hidden
        className={cn("size-full object-cover", blend && "mix-blend-lighten")}
        style={blend ? { willChange: "mix-blend-darke" } : undefined}
      >
        <source src="/videos/tree-growth.mp4" type="video/mp4" />
      </video>
    </span>
  );
}
