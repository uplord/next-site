'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { Fade } from "react-awesome-reveal";

import styles from './style.module.scss'

import { Buttons } from '@/components/ui/Button'
import Social from '@/components/styleguide/Social'
import Particles from '@/components/utils/Particles'
import { BannerProps } from '@/types/section'

export const Banner = ({ id, data }: BannerProps) => {

  const Content = (
    <>
      <Particles id="particles-banner" />
      <div className={styles.container}>
        <div className={styles.content}>
          <Fade delay={900} duration={600} className={clsx(styles.image)}>
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
              <Fade delay={1500} duration={600}>
                <Social className={styles.social} />
              </Fade>
            </div>
          </Fade>
          <Fade duration={600}>
            <div className={clsx(styles.text)}>
              <h1 dangerouslySetInnerHTML={{ __html: data.title }} />
              <h2>{data.subtitle}</h2>
              {data.buttons && <Buttons data={data.buttons} className={styles.buttons} />}
            </div>
          </Fade>
          <Fade delay={1500} duration={600} className={clsx(styles.viewMore)} />
        </div>
      </div>
    </>
  )

  return (
    <div id={id} className={styles.banner}>
      {Content}
    </div>
  )
}
