import styles from './style.module.scss';
import Image from 'next/image';
import { Svg } from '@/components';
import Animated from '@/components/Animated';

const projectsData = [
  { type: 'svg', name: 'brewdog', tooltip: 'Brewdog' },
  { type: 'svg', name: 'gdk', tooltip: 'German Doner Kebab' },
  { type: 'svg', name: 'subway', tooltip: 'Subway' },
  { type: 'svg', name: 'umbro', tooltip: 'Umbro' },
  { type: 'svg', name: 'superga', tooltip: 'Superga' },
  { type: 'svg', name: 'dundeeunited', tooltip: 'Dundee United Football Club' },
  { type: 'svg', name: 'hungrrr', tooltip: 'Hungrrr' },
  { type: 'svg', name: 'snappy', tooltip: 'Snappy Shopper' },
  { type: 'svg', name: 'macdonalds', tooltip: 'Macdonald Hotels & Resorts' },
  { type: 'svg', name: 'campbells', tooltip: 'Campbells Meat' },
  { type: 'image', src: '/images/petervardy.png', alt: 'Peter Vardy', tooltip: 'Peter Vardy' },
  { type: 'image', src: '/images/carmoney.png', alt: 'CarMoney', tooltip: 'CarMoney' },
  // { type: 'svg', name: 'bluewater', tooltip: 'Bluewater' },
];

export default function Projects({ dataid }) {
  return (
    <Animated dataid={dataid} id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>Projects I&apos;ve worked on</h2>
          </div>
          <div className={styles.list}>
            {projectsData.map((project, index) => (
              <div key={index} className={styles.item}
              {...(project.tooltip && { 'data-tooltip': project.tooltip })}
              >
                {project.type === 'svg' ? (
                  <Svg name={project.name} width={900} height={600} />
                ) : (
                  <Image
                    src={project.src}
                    alt={project.alt}
                    quality={80}
                    sizes="(max-width: 767px) 360px, 326px"
                    width={326}
                    height={218}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Animated>
  );
}
