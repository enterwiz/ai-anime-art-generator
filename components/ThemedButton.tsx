"use client";
import { useState, useEffect } from "react";
import PhMoonFill from "@/components/icons/moon";
import PhSunBold from "@/components/icons/sun";
import { useTheme } from "next-themes";

export function ThemedButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // 在客户端完全挂载之前不渲染任何内容
  }

  return (
    <div onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
      {resolvedTheme === "light" ? <PhMoonFill /> : <PhSunBold />}
    </div>
  );
}
