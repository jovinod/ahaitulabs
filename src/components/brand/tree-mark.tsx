export function TreeMark({
  size = 30,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient
          id="treeMarkGradient"
          gradientUnits="userSpaceOnUse"
          x1="50"
          y1="90"
          x2="50"
          y2="10"
        >
          <stop offset="0%" stopColor="#6d5dfc" />
          <stop offset="50%" stopColor="#e8a33d" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>

      {/* roots */}
      <path
        d="M50,78 Q40,84 28,86 M50,78 Q44,85 38,90 M50,78 Q56,85 62,90 M50,78 Q60,84 72,86 M50,78 L50,88"
        stroke="url(#treeMarkGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* trunk */}
      <path
        d="M46,78 C44,68 45,58 48,45 L52,45 C55,58 56,68 54,78 C51,80 49,80 46,78 Z"
        fill="url(#treeMarkGradient)"
      />

      {/* branches */}
      <path
        d="M50,45 Q40,38 30,32 M50,45 Q50,36 50,22 M50,45 Q60,38 70,32"
        stroke="url(#treeMarkGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* fruit: geometric nodes at branch tips */}
      <polygon
        points="50,12 55.2,15 55.2,21 50,24 44.8,21 44.8,15"
        stroke="#2dd4bf"
        strokeWidth="2.2"
        fill="none"
      />
      <polygon
        points="28,25 32.33,27.5 32.33,32.5 28,35 23.67,32.5 23.67,27.5"
        stroke="#e8a33d"
        strokeWidth="2.2"
        fill="none"
      />
      <polygon
        points="72,25 76.33,27.5 76.33,32.5 72,35 67.67,32.5 67.67,27.5"
        stroke="#6d5dfc"
        strokeWidth="2.2"
        fill="none"
      />
    </svg>
  );
}
