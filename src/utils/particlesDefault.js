import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesDefault = React.memo(({ id, className }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      particles: {
        color: { value: "#ffffff" },
        move: {
          direction: "none",
          enable: true,
          outModes: "out",
          random: true,
          speed: 0.3,
        },
        number: {
          density: {
            enable: true,
          },
          value: 800,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 5,
          },
          value: { min: 0.3, max: 0.6 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 1.5,
        },
      },
      detectRetina: true,
      style: {
        position: "absolute",
      },
    }),
    []
  );

  if (!init) {
    return null;
  }

  return <Particles id={id} options={options} className={className} />;
});

ParticlesDefault.displayName = "ParticlesDefault";

export default ParticlesDefault;
