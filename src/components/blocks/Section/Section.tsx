import styles from './style.module.scss'
import { ButtonGroup } from '@/components/ui/Button'
import { Link } from '@/components/ui/Link'
import { UtilImage as Image } from '@/components/utils'
import { SectionProps } from '@/types/section'
import { Variant } from '@/types/button'
import { Size } from '@/types/size'

export const Section = ({
  id,
  title,
  subtitle,
  content,
  buttons,
  image,
}: SectionProps) => {
  return (
    <div id={id} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <div className={styles.imageWrap}>
              <Image
                src={image.src}
                alt={image.alt}
                sizes={image.sizes}
                width={image.width}
                height={image.height}
              />
            </div>
          </div>
          <div className={styles.text}>
            <h3>{title}</h3>
            <h2>{subtitle}</h2>
            <p>{content}</p>
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
