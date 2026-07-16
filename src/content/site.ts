export const siteConfig = {
  name: "Ahaitu Labs",
  tagline: "Lead sharper. Build smarter. Ship faster.",
  description:
    "At Ahaitu Labs, we partner with individuals, organizations, and institutions to drive leadership excellence, foster advanced AI proficiency, and deliver high-performance web and mobile applications.",
  email: "support@ahaitulabs.com",
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "AI Consulting",
        href: "/services/ai-consulting",
        description: "Practical AI fluency for builders and leaders.",
      },
      {
        label: "Leadership Coaching",
        href: "/services/leadership-coaching",
        description: "Executive & team coaching for lasting impact.",
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
    { label: "AI Consulting", href: "/services/ai-consulting" },
    { label: "Leadership Coaching", href: "/services/leadership-coaching" },
    { label: "App & Web Development", href: "/services/app-web-development" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
