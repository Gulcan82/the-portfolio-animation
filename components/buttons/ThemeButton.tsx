"use client";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import GlowingButton from "./GlowingButton";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => setMounted(true), []);
  return (
    mounted && (
      <GlowingButton
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun aria-label="Sun Icon" size={26} />
        ) : (
          <Moon aria-label="Moon Icon" size={26} />
        )}
      </GlowingButton>
    )
  );
}
