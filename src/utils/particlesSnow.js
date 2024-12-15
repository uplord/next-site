import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesSnow = React.memo(() => {
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
        color: { value: "#fff" },
        move: {
          direction: "bottom",
          enable: true,
          outModes: "out",
          speed: 5,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 400,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 4,
        },
        wobble: {
          enable: true,
          distance: 10,
          speed: 10,
        },
        zIndex: {
          value: { min: 0, max: 100 },
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

  return <Particles id="tsparticles" options={options} />;
});

ParticlesSnow.displayName = "ParticlesSnow";

export default ParticlesSnow;
