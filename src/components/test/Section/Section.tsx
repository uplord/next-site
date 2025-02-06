'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { Fade } from "react-awesome-reveal";

import styles from './style.module.scss'

import { Buttons } from '@/components/ui/Button'
import { SectionProps } from '@/types/section'

export const Section = ({ id, data }: SectionProps) => {

  const Content = (
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
          </div>
        </Fade>
        <Fade duration={600}>
          <div className={clsx(styles.text)}>
            <h3>{data.title}</h3>
            <h2>{data.subtitle}</h2>
            <p>{data.content}</p>
            {data.buttons && (
              <Buttons data={data.buttons} className={styles.buttons} />
            )}
          </div>
        </Fade>
      </div>
    </div>
  )

  return (
    <div id={id} className={styles.section}>
      {Content}
    </div>
  )
}
