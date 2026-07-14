"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-[60] h-[2.5px] w-full origin-left bg-linear-to-r from-pillar-leadership via-primary to-pillar-dev"
      style={{ scaleX }}
    />
  );
}
