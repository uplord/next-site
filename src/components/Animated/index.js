'use client';

import styles from "./style.module.scss";
import { useEffect, useRef, useState } from 'react';
import { useQueue } from '@/context/queueContext';

export default function Animated({ children, dataid, id = '', className = '', onVisible, animated = true }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTransition, setHasTransition] = useState(false);
  const { queue, addToQueue, removeFromQueue } = useQueue();
  
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isVisible) {
        if (animated == true) {
          setHasTransition(true);
        }
        addToQueue(dataid);
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px 0px 0px 0px',
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => { 
    const queueList = queue.sort((a, b) => a - b);
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect?.bottom < 0 && !isVisible) {
      setHasTransition(false);
      setIsVisible(true);
      removeFromQueue(dataid);

      if (onVisible) {
        onVisible(dataid, false);
      }
      return;
    }

    if (queueList.length && queueList[0] === dataid) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        removeFromQueue(dataid);

        if (onVisible) {
          onVisible(dataid);
        }

        setTimeout(() => {
          setHasTransition(false);
        }, 600);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [queue, dataid, removeFromQueue, onVisible]);

  let dynamicClass = null
  if (animated == true) { 
    dynamicClass = isVisible && hasTransition ? styles.loading : 
    isVisible && !hasTransition ? '' : 
    styles.section;
  }

  return (
    <div 
      ref={sectionRef}
      id={id}
      className={`${className} ${dynamicClass}`.trim()}
    >
      {children}
    </div>
  );
}
