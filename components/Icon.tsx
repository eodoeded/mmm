import React from "react";

export function Icon({ name, className = "", ...props }: { name: string; className?: string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} {...props} aria-hidden="true">
      <use href={`/node_modules/@oxide/design-system/icons/sprite.svg#${name}`} />
    </svg>
  );
} 