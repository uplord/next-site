'use client'

import Image from 'next/image'
import styles from './style.module.scss'
import { Buttons } from '@/components/ui/Button'
import Social from '@/components/styleguide/Social'
import Particles from '@/components/utils/Particles'
import { BannerProps } from '@/types/section'

export const Banner = ({ id, data, hasHeader }: BannerProps) => {

  return (
    <div id={id} className={`${styles.banner} ${hasHeader && styles.header}`}>
      <>
        <Particles id="particles-banner" />
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.image}>
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
                <Social className={styles.social} />
              </div>
            </div>
            <div className={styles.text}>
              <h1 dangerouslySetInnerHTML={{ __html: data.title }} />
              <h2>{data.subtitle}</h2>
              {data.buttons && <Buttons data={data.buttons} className={styles.buttons} />}
            </div>
            <div className={styles.viewMore} />
          </div>
        </div>
      </>
    </div>
  )
}
