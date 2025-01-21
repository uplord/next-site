'use client'

import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'
import styles from './style.module.scss'
import { Buttons, Social } from '@/components'
import Animated from '@/components/utils/Animated'
import Particles from '@/components/utils/Particles'
import { BannerProps } from '@/types/section'

export const Banner = ({ id, queueId, data }: BannerProps) => {
  const [showImage, setShowImage] = useState(false)
  const [showText, setShowText] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [hasTransition, setHasTransition] = useState(false)
  const [onLoaded, setOnLoaded] = useState(false)

  const handleVisibilityChange = (animate = true) => {
    if (animate) {
      setHasTransition(true)
      setShowText(true)
      setTimeout(() => setShowImage(true), 900)
      setTimeout(() => setShowMore(true), 1500)

      setTimeout(() => {
        setOnLoaded(true)
        setShowText(false)
        setShowImage(false)
        setShowMore(false)
      }, 2400)
    } else {
      setOnLoaded(true)
    }
  }

  const Content = (
    <>
      <Particles id="particles-banner" />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={clsx(
            styles.image,
            queueId != null && onLoaded !== true ? styles.animate : '',
            queueId != null && hasTransition === true && onLoaded !== true  ? styles.transition : '',
            queueId != null && showImage ? styles.show : ''
          )}>
            <div className={styles.imageWrap}>
              <Image
                src={data.image.src}
                alt={data.image.alt}
                quality={80}
                priority={true}
                sizes={data.image.sizes}
                width={data.image.width}
                height={data.image.height}
              />
              <Social className={styles.social} />
            </div>
          </div>
          <div className={clsx(
            styles.text,
            queueId != null && onLoaded !== true ? styles.animate : '',
            queueId != null && hasTransition === true && onLoaded !== true  ? styles.transition : '',
            queueId != null && showText ? styles.show : ''
          )}>
            <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
            <h2>{data.subtitle}</h2>
            {data.buttons && (
              <Buttons data={data.buttons} className={styles.buttons} />
            )}
          </div>
          <div className={clsx(
            styles.viewMore,
            queueId != null && onLoaded !== true ? styles.animate : '',
            queueId != null && hasTransition === true && onLoaded !== true  ? styles.transition : '',
            queueId != null && showMore ? styles.show : ''
          )}></div>
        </div>
      </div>
    </>
  )

  if (queueId != null) {
    return (
      <Animated 
        id={id}
        queueId={queueId} 
        className={styles.banner} 
        onVisible={handleVisibilityChange}
        onLoaded={onLoaded}
      >
        {Content}
      </Animated>
    )
  }

  return (
    <div id={id} className={styles.banner}>
      {Content}
    </div>
  )
}
