import styles from './style.module.scss'
import Image from 'next/image'
import { Svg, Animated } from '@/components/utils'
import { useBreakpoints } from '@/utils/useBreakpoints'
import { ProjectsProps } from '@/types/section'

export const Projects = ({ id, queueId, data }: ProjectsProps) => {
  const breakpoints = useBreakpoints()

  const Content = (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>{data.title}</h2>
        </div>
        <div className={styles.list}>
          {data.list.map((item) => (
            <div
              key={item.name || item.alt}
              className={styles.item}
            >
              <div
                className={styles.image}
                {...(item.tooltip && { 'data-tooltip': item.tooltip })}
              >
                {item.type === 'svg' ? (
                  <Svg
                    name={item.name}
                    width={900}
                    height={600}
                  />
                ) : (
                  item.src && (
                    <Image
                      src={item.src}
                      alt={item.alt || 'Project Image'}
                      quality={80}
                      sizes={`(max-width: ${breakpoints.md - 1}px) 360px, 326px`}
                      width={326}
                      height={218}
                    />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        <p className={styles.viewMore}>
          Swipe to view more{' '}
          <Svg name="arrow-right-long-solid" width={16} height={16} />
        </p>
      </div>
    </div>
  )

  return queueId != null ? (
    <Animated id={id} queueId={queueId} className={styles.projects}>
      {Content}
    </Animated>
  ) : (
    <div id={id} className={styles.projects}>
      {Content}
    </div>
  )
}
