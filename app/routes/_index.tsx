import React from "react";
import { Link } from "@remix-run/react";

const sections = [
  { name: "Foundations", href: "/foundations" },
  { name: "Tokens", href: "/tokens" },
  { name: "Components", href: "/components" },
  { name: "Icons", href: "/icons" },
  { name: "AsciiDoc", href: "/asciidoc" },
];

export default function Index() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {sections.map((section) => (
        <Link
          key={section.href}
          to={section.href}
          className="rounded-lg border border-border bg-card p-8 text-center text-lg font-semibold shadow hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          {section.name}
        </Link>
      ))}
    </div>
  );
} 