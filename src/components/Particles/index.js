import { useSeason, ParticlesDefault, ParticlesSnow } from "@/utils/seasonTheme";

export default function Particles({ id, number = 200, className }) {
  const season = useSeason();

  return (
    <>
      {season === "default" && (
        <ParticlesDefault id={id} number={number} className={className} />
      )}
      {season === "xmas" || season === "winter" && (
        <ParticlesSnow id={id} number={number} className={className} />
      )}
    </>
  );
}
