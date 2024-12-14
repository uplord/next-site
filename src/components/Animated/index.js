"use client";

import clsx from "clsx";
import styles from "./style.module.scss";
import { useEffect, useRef, useState } from "react";
import { useQueue, useTimelineQueue } from "@/context/QueueContexts";

export default function Animated({
  children,
  queueId,
  id = "",
  className = "",
  onVisible,
  onLoaded = false,
  animated = true,
  queueType = "default",
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasTransition, setHasTransition] = useState(false);

  // Always call hooks at the top level
  const defaultQueue = useQueue();
  const timelineQueue = useTimelineQueue();

  // Decide context dynamically
  const { queue, addToQueue, removeFromQueue } =
    queueType === "timeline" ? timelineQueue : defaultQueue;

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isVisible) {
        if (animated) {
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

      onVisible?.(false);
      return;
    }

    const sortedQueue = queue.sort((a, b) => a - b);

    if (sortedQueue.includes(queueId) && sortedQueue[0] === queueId) {
      setIsVisible(true);
      onVisible?.();
      if (!onVisible) setTimeout(() => setIsLoaded(true), 600);
    }
  }, [queue, queueId]);

  useEffect(() => {
    if (onLoaded) {
      setIsLoaded(true);
    }
  }, [onLoaded]);

  useEffect(() => {
    if (isLoaded) {
      setHasTransition(false);
      removeFromQueue(queueId);
    }
  }, [isLoaded, queueId]);

  let dynamicClass = "";
  if (animated && !isVisible) {
    dynamicClass = styles.section + " " + styles.animated;
  } else if (animated && isVisible && hasTransition) {
    dynamicClass = styles.loading;
  }

  return (
    <div ref={sectionRef} id={id} className={clsx(dynamicClass, className)}>
      {children}
    </div>
  );
}
