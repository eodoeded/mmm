import React, { useState } from "react";
import { Link, useLocation } from "@remix-run/react";

const navLinks = [
  { name: "Foundations", href: "/foundations" },
  { name: "Tokens", href: "/tokens" },
  { name: "Components", href: "/components" },
  { name: "Icons", href: "/icons" },
  { name: "AsciiDoc", href: "/asciidoc" },
];

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [dark, setDark] = useState(false);
  const location = useLocation();

  // Toggle dark mode by toggling a class on the html element
  const toggleDark = () => {
    setDark((d) => {
      const next = !d;
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="sticky top-0 h-screen w-56 flex-shrink-0 border-r border-border bg-sidebar p-6 flex flex-col">
        <div className="mb-8 font-bold text-lg tracking-tight">mmm</div>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${location.pathname === link.href ? "bg-accent text-accent-foreground" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-8">
          <button
            onClick={toggleDark}
            className="w-full rounded bg-muted px-3 py-2 text-xs font-semibold hover:bg-muted-foreground"
            aria-label="Toggle dark mode"
          >
            {dark ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
} 