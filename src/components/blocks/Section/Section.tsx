'use client'

import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'
import styles from './style.module.scss'
import { Buttons } from '@/components'
import Animated from '@/components/utils/Animated'
import { useBreakpoints, isBreakpoint } from '@/utils/useBreakpoints'
import { SectionProps } from '@/types/section'

export const Section = ({ id, queueId }: SectionProps) => {
  const breakpoints = useBreakpoints()
  const [showImage, setShowImage] = useState(false)
  const [showText, setShowText] = useState(false)
  const [hasTransition, setHasTransition] = useState(false)
  const [onLoaded, setOnLoaded] = useState(false)

  const data = {
    title: 'About Michael Allen',
    subtitle: 'Front End Development',
    content:
      `I'm an experienced Front End Developer with excellent collaboration, organization, and teamwork skills. Passionate about developing in HTML, CSS, and JavaScript and always open to exploring new technologies. Over the last 9 years, I've worked with various clients, helping me hone my analytical, debugging, and problem-solving skills to create exceptional websites.`,
    buttons: [
      {
        title: 'Get in touch',
        link: 'mailto:michael@uplord.co.uk',
        class: 'primary',
      },
    ],
    image: {
      src: '/images/me.png',
      alt: 'Michael Allen',
      sizes: `(max-width: ${breakpoints.md - 1}px) 240px, 500px`,
      width: 500,
      height: 617,
    },
  }

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
            queueId && onLoaded !== true ? styles.animate : '',
            queueId && hasTransition === true && onLoaded !== true ? styles.transition : '',
            queueId && showImage ? styles.show : ''
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
            queueId && onLoaded !== true ? styles.animate : '',
            queueId && hasTransition === true && onLoaded !== true ? styles.transition : '',
            queueId && showText ? styles.show : ''
          )}
        >
          <h3>{data.title}</h3>
          <h2>{data.subtitle}</h2>
          <p>{data.content}</p>
          <Buttons data={data.buttons} className={styles.buttons} />
        </div>
      </div>
    </div>
  )

  if (queueId) {
    return (
      <Animated
        id={id}
        queueId={queueId}
        className={styles.section}
        onVisible={handleVisibilityChange}
        onLoaded={onLoaded}
      >
        {Content}
      </Animated>
    )
  }

  return (
    <div id={id} className={styles.section}>
      {Content}
    </div>
  )
}
