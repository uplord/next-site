import { useState, useEffect } from "react";
export { default as ParticlesSnow } from "./particlesSnow";
export { default as ParticlesDefault } from "./particlesDefault";

export function useSeason() {
  const [season, setSeason] = useState(false);

  useEffect(() => {
    const today = new Date();
    const isXmasSeason =
      today.getMonth() === 11 && today.getDate() >= 1 && today.getDate() <= 25;

    if (isXmasSeason) {
      setSeason("xmas");
    } else {
      setSeason("default");
    }
  }, []);

  return season;
}
