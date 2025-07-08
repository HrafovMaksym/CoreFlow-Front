"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const t = useTranslations("Themes");

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded border"
    >
      {theme === "dark" ? `☀️ ${t("LightTheme")}` : `🌙 ${t("DarkTheme")}`}
    </button>
  );
}
