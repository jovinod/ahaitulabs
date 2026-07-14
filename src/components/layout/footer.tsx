import Link from "next/link";

import { siteConfig, footerLinks } from "@/content/site";
import { TreeMarkImage } from "@/components/brand/tree-mark-image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 text-center sm:grid-cols-4 sm:text-left">
          <div className="col-span-2">
            <Link href="/" className="flex items-center justify-center gap-2.5 sm:justify-start">
              <TreeMarkImage size={22} />
              <span className="text-display text-base font-medium tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mx-auto mt-3 max-w-xs text-sm text-muted-foreground sm:mx-0">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Services</h3>
            <ul className="mt-3 flex flex-col items-center gap-2.5 sm:items-start">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Company</h3>
            <ul className="mt-3 flex flex-col items-center gap-2.5 sm:items-start">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between text-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Leadership Coaching · AI/ML Coaching · App & Web Development</p>
        </div>
      </div>
    </footer>
  );
}
