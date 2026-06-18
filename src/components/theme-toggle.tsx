"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-on-container transition-colors hover:bg-surface-soft"
    >
      {/* Both icons render; CSS reveals the right one via the .dark class,
          so there's no hydration mismatch and no mounted-state effect. */}
      <Sun className="hidden h-5 w-5 dark:block" />
      <Moon className="h-5 w-5 dark:hidden" />
    </button>
  );
}
