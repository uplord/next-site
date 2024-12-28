import { useSeason, ParticlesDefault, ParticlesSnow } from "@/utils/seasonTheme";

export default function Particles({ id, className }) {
  const season = useSeason();

  return (
    <>
      {season === "default" && (
        <ParticlesDefault id={id} className={className} />
      )}
      {season === "xmas" || season === "winter" && (
        <ParticlesSnow id={id} className={className} />
      )}
    </>
  );
}
