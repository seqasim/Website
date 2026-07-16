/** Adobe Stock brain-icon names (files in public/images/icons/). */
export type IconName =
  | "neuron"
  | "cognition"
  | "mental-health"
  | "alzheimer"
  | "neural-network"
  | "neurology"
  | "intellect"
  | "wise"
  | "learning"
  | "brain"
  | "focus"
  // Legacy aliases
  | "electrode"
  | "grid"
  | "network"
  | "function"
  | "sticky"
  | "fade";

/** Map legacy / alias names to actual PNG filenames. */
export const iconAliases: Partial<Record<IconName, IconName>> = {
  electrode: "neuron",
  grid: "cognition",
  network: "neural-network",
  function: "intellect",
  sticky: "neuron",
  fade: "alzheimer",
};

export function resolveIconName(name: IconName): IconName {
  return iconAliases[name] ?? name;
}
