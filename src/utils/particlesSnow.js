import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadImageShape } from "@tsparticles/shape-image"; // Import the image shape loader

const ParticlesSnow = React.memo(({ id, className }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadImageShape(engine);
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
          value: 0.8,
        },
        shape: {
          type: "image",
          options: {
            image: {
              src: "/snowflake.svg",
              width: 20,
              height: 20,
            },
          },
        },
        size: {
          value: 8,
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

  return <Particles id={id} options={options} className={className} />;
});

ParticlesSnow.displayName = "ParticlesSnow";

export default ParticlesSnow;
