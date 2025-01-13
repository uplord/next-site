import { useSeason } from '@/utils/seasonTheme';
import ParticlesDefault from '@/utils/particlesDefault';
import ParticlesSnow from '@/utils/particlesSnow';

interface ParticlesProps {
  id: string;
  className?: string;
}

const Particles = ({ id, className }: ParticlesProps) => {
  const season = useSeason();

  return (
    <>
      {season === 'default' && (
        <ParticlesDefault id={id} className={className} />
      )}
      {(season === 'xmas' || season === 'winter') && (
        <ParticlesSnow id={id} className={className} />
      )}
    </>
  );
};

export default Particles;
