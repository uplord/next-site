'use client'

import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'
import styles from './style.module.scss'
import { Buttons } from '@/components/ui/Button'
import Animated from '@/components/utils/Animated'
import { isBreakpoint } from '@/utils/useBreakpoints'
import { SectionProps } from '@/types/section'

export const Section = ({ id, queueId, data }: SectionProps) => {
  const [showImage, setShowImage] = useState(false)
  const [showText, setShowText] = useState(false)
  const [hasTransition, setHasTransition] = useState(false)
  const [onLoaded, setOnLoaded] = useState(false)

  const handleVisibilityChange = (animate = true) => {
    if (animate) {
      setHasTransition(true)

      if (!isBreakpoint('md')) {
        setShowText(true)
        setShowImage(true)

        setTimeout(() => {
          setOnLoaded(true)
          setShowText(false)
          setShowImage(false)
        }, 900)
      } else {
        setShowText(true)
        setTimeout(() => setShowImage(true), 900)

        setTimeout(() => {
          setOnLoaded(true)
          setShowText(false)
          setShowImage(false)
        }, 1800)
      }
    } else {
      setOnLoaded(true)
    }
  }

  const Content = (
    <div className={styles.container}>
      <div className={styles.content}>
        <div
          className={clsx(
            styles.image,
            queueId != null && !onLoaded && styles.animate,
            queueId != null && hasTransition && !onLoaded && styles.transition,
            queueId != null && showImage && styles.show
          )}
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
          className={clsx(
            styles.text,
            queueId != null && !onLoaded && styles.animate,
            queueId != null && hasTransition && !onLoaded && styles.transition,
            queueId != null && showText && styles.show
          )}
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
  )

  return queueId != null ? (
    <Animated
      id={id}
      queueId={queueId}
      className={styles.section}
      onVisible={handleVisibilityChange}
      onLoaded={onLoaded}
    >
      {Content}
    </Animated>
  ) : (
    <div id={id} className={styles.section}>
      {Content}
    </div>
  )
}
