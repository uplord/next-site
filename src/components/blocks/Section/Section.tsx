import styles from './style.module.scss'
import { Buttons } from '@/components/ui/Button'
import { UtilImage as Image } from '@/components/utils'
import { SectionProps } from '@/types/section'

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
            {buttons && <Buttons data={buttons} className={styles.buttons} />}
          </div>
        </div>
      </div>
    </div>
  )
}
