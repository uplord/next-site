import styles from './style.module.scss'
import { TimelineList } from './TimelineList'
import { Buttons } from '@/components/ui/Button'
import { TimelineProps } from '@/types/section'

export const Timeline = ({
  id,
  title,
  subtitle,
  content,
  buttons,
  list,
  hasHeader = false,
}: TimelineProps) => {
  return (
    <div id={id} className={`${styles.timeline} ${hasHeader && styles.header}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.list}>
            {list.map((item, index) => (
              <TimelineList
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                link={item.link}
                content={item.content}
                icon={item.icon}
              />
            ))}
          </div>
          <div className={styles.text}>
            <h3>{title}</h3>
            <h2>{subtitle}</h2>
            {content && <p>{content}</p>}
            {buttons && <Buttons data={buttons} className={styles.buttons} />}
          </div>
        </div>
      </div>
    </div>
  )
}
