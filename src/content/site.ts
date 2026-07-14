export const siteConfig = {
  name: "Ahaitu Labs",
  tagline: "Lead sharper. Build smarter. Ship faster.",
  description:
    "Ahaitu Labs is a multi-disciplinary studio helping people and teams lead better, build AI/ML fluency, and ship exceptional web & app products.",
  email: "support@ahaitulabs.com",
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Leadership Coaching",
        href: "/services/leadership-coaching",
        description: "Executive & team coaching for lasting impact.",
      },
      {
        label: "AI/ML Coaching",
        href: "/services/ai-ml-coaching",
        description: "Practical AI fluency for builders and leaders.",
      },
      {
        label: "App & Web Development",
        href: "/services/app-web-development",
        description: "Production-grade products, designed and shipped.",
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  services: [
    { label: "Leadership Coaching", href: "/services/leadership-coaching" },
    { label: "AI/ML Coaching", href: "/services/ai-ml-coaching" },
    { label: "App & Web Development", href: "/services/app-web-development" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
