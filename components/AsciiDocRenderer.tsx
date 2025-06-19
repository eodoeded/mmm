import React from "react";
import { AsciiDocBlocks } from "@oxide/react-asciidoc";

export default function AsciiDocRenderer({ source }: { source: string }) {
  return <AsciiDocBlocks source={source} />;
} 