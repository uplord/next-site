import styles from './style.module.scss'
import { UtilImage as Image, Svg } from '@/components/utils'
import { useBreakpoints } from '@/utils/useBreakpoints'
import { ProjectsListProps } from '@/types/section'

export const ProjectsList = ({
  type,
  name,
  src,
  alt,
  tooltip,
}: ProjectsListProps) => {
  const breakpoints = useBreakpoints()

  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        {...(tooltip && { 'data-tooltip': tooltip })}
      >
        {type === 'svg' ? (
          <Svg name={name} width={900} height={600} />
        ) : (
          src && (
            <Image
              src={`/images/${src}`}
              alt={alt || 'Project Image'}
              sizes={`(max-width: ${breakpoints.md - 1}px) 360px, 326px`}
              width={326}
              height={218}
            />
          )
        )}
      </div>
    </div>
  )
}
