import styles from './style.module.scss'
import Link from 'next/link'
import { Svg } from '@/components/utils'
import { TimelineListProps } from '@/types/section'

export const TimelineList = ({
  title,
  subtitle,
  link,
  content,
  icon,
}: TimelineListProps) => {
  return (
    <div className={styles.item}>
      <h4>{title}</h4>
      <h3>{subtitle}</h3>
      <Link href={link} target="_blank">
        <Svg name={icon.name} width={icon.width} height={icon.height} />
      </Link>
      {content && (
        <div className={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
    </div>
  )
}
