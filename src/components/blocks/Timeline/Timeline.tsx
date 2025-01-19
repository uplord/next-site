'use client'

import { useState } from 'react'
import clsx from 'clsx'
import styles from './style.module.scss'
import Link from 'next/link'
import { Svg, Buttons } from '@/components'
import Animated from '@/components/utils/Animated'
import { TimelineProps, TimelineListProps } from '@/types/section'

export const Timeline = ({ id, queueId, data }: TimelineProps) => {
  const [showText, setShowText] = useState(false)
  const [hasTransition, setHasTransition] = useState(false)
  const [onLoaded, setOnLoaded] = useState(false)
  const [animatedCount, setAnimatedCount] = useState(0)
  const [onStart, setOnStart] = useState(false)

  const handleVisibilityChange = (animate = true) => {
    if (animate == true) {
      setHasTransition(true)
      setShowText(true)

      setTimeout(() => {
        setOnStart(true)
      }, 600)
    } else {
      setOnLoaded(true)
    }
  }

  const handleCompleteChange = () => {
    setAnimatedCount((prevCount) => {
      const newCount = prevCount + 1
  
      if (newCount === data.list.length) {
        setOnLoaded(true)
        setShowText(false)
      }
  
      return newCount
    })
  }

  const ListContent = ({ item }: { item: TimelineListProps }) => (
    <>
      <h4>{item.title}</h4>
      <h3>{item.subtitle}</h3>
      <Link href={item.link} target="_blank">
        <Svg name={item.logo} height={32} />
      </Link>
      {item.content && (
        <div className={styles.content}
          dangerouslySetInnerHTML={{ __html: item.content }}
        ></div>
      )}
    </>
  )

  const Content = (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.list}>
          {data.list.map((item, index) => (
            queueId ? (
              <Animated
                key={index}
                queueId={index}
                onStart={onStart}
                onComplete={handleCompleteChange}
                queueType="timeline"
                className={styles.item}
              >
                <ListContent item={item} />
              </Animated>
            ) : (
              <div
                key={index}
                className={styles.item}
              >
                <ListContent item={item} />
              </div>
            )
          ))}
        </div>
        <div className={clsx(
          styles.text,
          queueId && onLoaded !== true ? styles.animate : '',
          queueId && hasTransition === true && onLoaded !== true  ? styles.transition : '',
          queueId && showText ? styles.show : ''
        )}>
          <h3>{data.title}</h3>
          <h2>{data.subtitle}</h2>
          {data.content && (
            <p>{data.content}</p>
          )}
          {data.buttons && (
            <Buttons data={data.buttons} className={styles.buttons} />
          )}
        </div>
      </div>
    </div>
  )

  if (queueId) {
    return (
      <Animated
        id={id}
        queueId={queueId}
        onVisible={handleVisibilityChange}
        onLoaded={onLoaded}
        className={styles.timeline}
      >
        {Content}
      </Animated>
    )
  }

  return (
    <div
      id={id}
      className={styles.timeline}
    >
      {Content}
    </div>
  )
}
