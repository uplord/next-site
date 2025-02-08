'use client'

import styles from './style.module.scss'
import { Buttons } from '@/components/ui/Button'
import { UtilImage as Image } from '@/components/utils'
import Social from '@/components/styleguide/Social'
import Particles from '@/components/utils/Particles'
import { BannerProps } from '@/types/section'

export const Banner = ({
  id,
  title,
  subtitle,
  buttons,
  image,
  hasHeader,
  hasParticles = true,
}: BannerProps) => {

  return (
    <div id={id} className={`${styles.banner} ${hasHeader && styles.header}`}>
      <>
        {hasParticles && <Particles id={`particles-${id}`} />}
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
                <Social className={styles.social} />
              </div>
            </div>
            <div className={styles.text}>
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
              <h2>{subtitle}</h2>
              {buttons && <Buttons data={buttons} className={styles.buttons} />}
            </div>
            <div className={styles.viewMore} />
          </div>
        </div>
      </>
    </div>
  )
}
