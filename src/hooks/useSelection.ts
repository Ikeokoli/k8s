import { useState } from "react";

export function useSelection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return { selectedIndex, select: setSelectedIndex, clear: () => setSelectedIndex(null) };
}
