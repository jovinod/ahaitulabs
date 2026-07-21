import { Reveal } from "@/components/ui/reveal";
import { SkeletonImage } from "@/components/ui/skeleton-image";
import { cn } from "@/lib/utils";

interface ImageBreakProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function ImageBreak({ src, alt, caption, className }: ImageBreakProps) {
  return (
    <section className="px-8 py-10 sm:px-6 sm:py-14 lg:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div
          className={cn(
            "glass relative aspect-21/9 overflow-hidden rounded-[2rem]",
            className
          )}
        >
          <SkeletonImage
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
          {caption && (
            <p className="absolute bottom-6 left-6 max-w-sm text-[7px] md:text-sm text-foreground sm:bottom-8 sm:left-8">
              {caption}
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
