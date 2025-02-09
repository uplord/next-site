import styles from './style.module.scss'
import { TimelineList } from './TimelineList'
import { ButtonGroup } from '@/components/ui/Button'
import { Link } from '@/components/ui/Link'
import { TimelineProps } from '@/types/section'
import { Variant } from '@/types/button'
import { Size } from '@/types/size'

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
            {buttons && (
              <ButtonGroup className={styles.buttons}>
                {buttons.map((button, index) => (
                  <Link
                    key={index}
                    label={button.label}
                    href={button.href}
                    target={button.target}
                    size={Size.Large}
                    variant={Variant[button.variant as keyof typeof Variant]}
                    className={(Array.isArray(button.className)
                      ? button.className
                      : button.className?.split(' ') || []
                    )
                      .map((cls) => styles[cls] || cls)
                      .join(' ')}
                  />
                ))}
              </ButtonGroup>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
