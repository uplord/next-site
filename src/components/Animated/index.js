"use client";

import clsx from "clsx";
import styles from "./style.module.scss";
import { useEffect, useRef, useState } from "react";
import { useQueue } from "@/context/queueContext";

export default function Animated({ children, queueId, id = "", className = "", onVisible, onLoaded = false, animated = true }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
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
    const rect = sectionRef.current?.getBoundingClientRect();
  
    if (rect?.bottom < 0 && !isVisible) {
      setHasTransition(false);
      setIsVisible(true);
      removeFromQueue(queueId);

      onVisible?.(queueId, false);
      return;
    }

    const sortedQueue = queue.sort((a, b) => a - b);
    if (sortedQueue.includes(queueId) && sortedQueue[0] === queueId) {
      setIsVisible(true);
      onVisible?.(queueId);
      if (!onVisible) setTimeout(() => setIsLoaded(true), 600);
    }
  }, [queue, queueId]);

  useEffect(() => {
    if (onLoaded) setIsLoaded(true);
  }, [onLoaded]);

  useEffect(() => {
    if (isLoaded) {
      setHasTransition(false);
      removeFromQueue(queueId);
    }
  }, [isLoaded, queueId]);

  const dynamicClass =
    animated && isVisible
      ? hasTransition
        ? styles.loading
        : ""
      : styles.section;

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
