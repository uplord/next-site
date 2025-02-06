import Image from 'next/image'
import styles from './style.module.scss'
import { Buttons } from '@/components/ui/Button'
import { SectionProps } from '@/types/section'

export const Section = ({ id, data }: SectionProps) => {

  return (
    <div id={id} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div
            className={styles.image}
          >
            <div className={styles.imageWrap}>
              <Image
                src={data.image.src}
                alt={data.image.alt}
                quality={80}
                priority
                sizes={data.image.sizes}
                width={data.image.width}
                height={data.image.height}
              />
            </div>
          </div>
          <div
            className={styles.text}
          >
            <h3>{data.title}</h3>
            <h2>{data.subtitle}</h2>
            <p>{data.content}</p>
            {data.buttons && (
              <Buttons data={data.buttons} className={styles.buttons} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
