import type { CSSProperties } from "react";

export type WoodStops = [string, string, string];

export function woodStyle(stops: WoodStops): CSSProperties {
  return {
    backgroundImage: `repeating-linear-gradient(112deg, rgba(0,0,0,0.22) 0px, rgba(0,0,0,0.22) 1.5px, transparent 1.5px, transparent 5px), linear-gradient(135deg, ${stops[0]} 0%, ${stops[1]} 55%, ${stops[2]} 100%)`,
    boxShadow:
      "inset 0 2px 3px rgba(255,255,255,0.22), inset 0 -4px 8px rgba(0,0,0,0.4), inset 0 0 0 2px rgba(0,0,0,0.28)",
  };
}

export const woodFinishes: { name: string; stops: WoodStops }[] = [
  { name: "Mahogany Classic", stops: ["#8a4a3a", "#5c2a1e", "#33130d"] },
  { name: "Honey Oak", stops: ["#e0b273", "#b9803f", "#8a5a2a"] },
  { name: "Walnut Noir", stops: ["#6b5240", "#443327", "#241a12"] },
  { name: "Rosewood Elegance", stops: ["#a15a4f", "#6e2f2a", "#3d1613"] },
  { name: "Espresso Teak", stops: ["#5a4632", "#3a2b1d", "#1c130c"] },
];
