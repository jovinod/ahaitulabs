import Image from "next/image";

import { cn } from "@/lib/utils";

export function TreeMarkImage({
  size = 30,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/images/bg-logo.png"
      alt=""
      aria-hidden
      width={size}
      height={size}
      className={cn("shrink-0 rounded-xl object-cover", className)}
      style={{ width: size, height: size }}
    />
  );
}
