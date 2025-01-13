import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { MoveDirection, OutMode } from '@tsparticles/engine';

interface ParticlesDefaultProps {
  id: string;
  className?: string;
}

const ParticlesDefault = React.memo(
  ({ id, className }: ParticlesDefaultProps) => {
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
            value: 'transparent',
          },
        },
        fpsLimit: 24,
        particles: {
          color: { value: '#ffffff' },
          move: {
            direction: 'none' as MoveDirection,
            enable: true,
            outModes: 'out' as OutMode,
            random: true,
            speed: 0.3,
          },
          number: {
            density: {
              enable: true,
              area: 2000,
            },
            value: 200,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 5,
            },
            value: { min: 0.3, max: 0.6 },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: 1.5,
          },
        },
        detectRetina: true,
        style: {
          position: 'absolute',
        },
      }),
      []
    );

    if (!init) {
      return null;
    }

    return <Particles id={id} options={options} className={className} />;
  }
);

ParticlesDefault.displayName = 'ParticlesDefault';

export default ParticlesDefault;
