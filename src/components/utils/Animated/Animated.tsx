'use client';

import clsx from 'clsx';
import styles from './style.module.scss';
import { useEffect, useRef, useState, ReactNode } from 'react';
import { useQueue, useTimelineQueue } from '@/context/queueContexts';

type AnimatedProps = {
  children: ReactNode;
  queueId: number;
  id?: string;
  className?: string;
  onStart?: boolean;
  onVisible?: (isVisible: boolean) => void;
  onLoaded?: boolean;
  onComplete?: () => void;
  queueType?: 'default' | 'timeline';
};

export const Animated = ({ children, queueId, id = '', className = '', onStart = true, onVisible, onLoaded = false, onComplete, queueType = 'default' }: AnimatedProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasTransition, setHasTransition] = useState(false);

  const defaultQueue = useQueue();
  const timelineQueue = useTimelineQueue();

  const { queue, addToQueue, removeFromQueue } =
    queueType === 'timeline' ? timelineQueue : defaultQueue;

  const handleIntersection = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const entry = entries[0];
    if (entry.isIntersecting && !isVisible) {
      if (!onVisible) {
        setHasTransition(true);
      }
      addToQueue(queueId);
      observer.unobserve(entry.target);
    }
  };

  useEffect(() => {
    if (onStart) {
      const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: '0% 0% -100px 0%',
        threshold: 0,
      });
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      return () => observer.disconnect();
    }
  }, [isVisible, onStart, handleIntersection]);

  useEffect(() => {
    const rect = sectionRef.current?.getBoundingClientRect();

    if (rect?.bottom && rect.bottom < 0 && !isVisible) {
      setIsVisible(true);
      removeFromQueue(queueId);
      if (onVisible) {
        onVisible(false);
      }
      if (onComplete) {
        onComplete();
      }
      return;
    }

    const sortedQueue = queue.sort((a: number, b: number) => a - b);

    if (sortedQueue.includes(queueId) && sortedQueue[0] === queueId) {
      setIsVisible(true);
      if (onVisible) {
        onVisible(true);
      } else {
        setTimeout(() => {
          setIsLoaded(true);
          if (onComplete) {
            onComplete();
          }
        }, 900);
      }
    }
  }, [queue, queueId, isVisible, onVisible, onComplete, removeFromQueue]);

  useEffect(() => {
    if (onLoaded) {
      setIsLoaded(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [onLoaded]);

  useEffect(() => {
    if (isLoaded) {
      setHasTransition(false);
      removeFromQueue(queueId);
    }
  }, [isLoaded, queueId]);

  let dynamicClass = '';
  if (!onVisible && !isVisible) {
    dynamicClass = `${styles.animate} ${styles.transition}`;
  } else if (!onVisible && isVisible && hasTransition === true) {
    dynamicClass = `${styles.show} ${styles.transition}`;
  }

  return (
    <div ref={sectionRef} id={id} className={clsx(className, dynamicClass)}>
      {children}
    </div>
  );
}
