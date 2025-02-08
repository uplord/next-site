import styles from './style.module.scss'
import { ProjectsList } from './ProjectsList'
import { Svg } from '@/components/utils'
import { ProjectsProps } from '@/types/section'

export const Projects = ({ id, title, list }: ProjectsProps) => {
  return (
    <div id={id} className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>{title}</h2>
          </div>
          <div className={styles.list}>
            {list.map((item) => (
              <ProjectsList
                key={item.name || item.alt}
                type={item.type}
                name={item.name}
                src={item.src}
                alt={item.alt}
                tooltip={item.tooltip}
              />
            ))}
          </div>
          <p className={styles.viewMore}>
            Swipe to view more{' '}
            <Svg name="arrow-right-long-solid" width={16} height={16} />
          </p>
        </div>
      </div>
    </div>
  )
}
