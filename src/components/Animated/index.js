"use client";

import clsx from "clsx";
import styles from "./style.module.scss";
import { useEffect, useRef, useState } from "react";
import { useQueue } from "@/context/queueContext";

export default function Animated({ children, queueId, id = "", className = "", onVisible, animated = true }) {
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
        addToQueue(queueId);
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0% 0% -100px 0%",
      threshold: 0,
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
      removeFromQueue(queueId);

      if (onVisible) {
        onVisible(queueId, false);
      }
      return;
    }

    if (queueList.length && queueList[0] === queueId) {
      setIsVisible(true);

      if (onVisible) {
        onVisible(queueId);
      }

      setTimeout(() => {
        setHasTransition(false);
      }, 600);

      setTimeout(() => {
        removeFromQueue(queueId);
      }, 1200);
    }
  }, [queue, queueId, removeFromQueue, onVisible]);

  let dynamicClass = null
  if (animated == true) { 
    dynamicClass = isVisible && hasTransition ? styles.loading : 
    isVisible && !hasTransition ? "" : 
    styles.section;
  }

  return (
    <div 
      ref={sectionRef}
      id={id}
      className={clsx(dynamicClass, className)}
    >
      {children}
    </div>
  );
}
