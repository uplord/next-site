import { useState, useEffect } from "react";
export { default as SeasonSnow } from "./seasonSnow";

export function useSeason() {
  const [season, setSeason] = useState(false);

  useEffect(() => {
    setSeason("winter");
  }, []);

  return season;
}
