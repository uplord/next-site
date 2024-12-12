import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import styles from "./style.module.scss";
import Svg from "@/components/Svg";

export default function Toggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [themeStyles, setThemeStyles] = useState("");

  const updateFavicon = (currentTheme) => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = currentTheme === "dark" ? "/favicon-dark.svg" : "/favicon.svg";
    }
  };

  useEffect(() => {
    if (resolvedTheme) {
      setThemeStyles(styles[resolvedTheme] || "");
      updateFavicon(resolvedTheme);
    }
  }, [resolvedTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
    };

    if (theme === "system") {
      setTheme(mediaQuery.matches ? "dark" : "light");
    }

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme, setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    updateFavicon(newTheme);
  };

  return (
    <div
      className={clsx(styles.toggle, themeStyles)}
      onClick={toggleTheme}
      suppressHydrationWarning
    >
      <span></span>
      <Svg name="sun-solid" width={20} height={20} className={styles.sun} />
      <Svg name="moon-solid" width={20} height={20} className={styles.moon} />
    </div>
  );
}
