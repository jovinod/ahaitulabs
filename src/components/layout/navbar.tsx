"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { TreeMarkVideo } from "@/components/brand/tree-mark-video";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8"
    >
      <div className="glass-nav mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <TreeMarkVideo size={48} />
          <span className="text-display text-base font-medium tracking-tight text-foreground">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:block">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) =>
                "children" in item && item.children ? (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger className="bg-transparent text-sm text-muted-foreground hover:text-foreground">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="glass-strong grid w-[320px] gap-1 rounded-xl p-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link href={child.href} className="flex-col items-start gap-0.5">
                                <span className="text-sm font-medium text-foreground">
                                  {child.label}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {child.description}
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="px-2.5 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="h-9 px-4">
            <Link href="/contact">Start a conversation</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </div>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="right" className="glass-nav w-full border-0 sm:max-w-xs">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2.5">
              <TreeMarkVideo size={22} />
              <span className="text-display">{siteConfig.name}</span>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4">
            {navItems.map((item) => (
              <div key={item.href} className="py-1">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-base font-medium text-foreground"
                >
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-1.5 text-sm text-muted-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-auto p-4">
            <Button asChild className={cn("w-full")}>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Start a conversation
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
}
