"use client";

import Snowfall from "react-snowfall";
import { useEffect, useState } from "react";

export default function SeasonSnow() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [snowflakeCount, setSnowflakeCount] = useState(200);

  useEffect(() => {
    const updateSnowflakeCount = () => {
      setSnowflakeCount(window.innerWidth < 768 ? 50 : 200);
    };

    updateSnowflakeCount();

    window.addEventListener("resize", updateSnowflakeCount);
    return () => {
      window.removeEventListener("resize", updateSnowflakeCount);
    };
  }, []);

  useEffect(() => {
    const darkModeClass = document.documentElement.classList.contains("dark");
    setIsDarkMode(darkModeClass);

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Snowfall
      color={isDarkMode ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.5)"}
      style={{ background: "transparent" }}
      snowflakeCount={snowflakeCount}
    />
  );
}