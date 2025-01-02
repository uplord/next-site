"use client";

import clsx from "clsx";
import styles from "./style.module.scss";
import { useEffect, useRef, useState, useCallback } from "react";
import { useQueue, useTimelineQueue } from "@/context/QueueContexts";

export default function Animated({
  children,
  queueId,
  id = "",
  className = "",
  onStart = true,
  onVisible,
  onLoaded = false,
  onComplete,
  queueType = "default",
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasTransition, setHasTransition] = useState(false);

  const defaultQueue = useQueue();
  const timelineQueue = useTimelineQueue();
  const { queue, addToQueue, removeFromQueue } =
    queueType === "timeline" ? timelineQueue : defaultQueue;

  const stableOnComplete = useCallback(() => {
    if (onComplete) onComplete();
  }, [onComplete]);

  const stableRemoveFromQueue = useCallback(
    (id) => {
      removeFromQueue(id);
    },
    [removeFromQueue]
  );

  const handleIntersection = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible) {
          if (!onVisible) setHasTransition(true);
          addToQueue(queueId);
          observer.unobserve(entry.target);
        }
      });
    },
    [isVisible, onVisible, addToQueue, queueId]
  );

  useEffect(() => {
    if (onStart) {
      const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: "0% 0% -100px 0%",
        threshold: 0,
      });
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }
  }, [handleIntersection, onStart]);

  useEffect(() => {
    const rect = sectionRef.current?.getBoundingClientRect();

    if (rect?.bottom < 0 && !isVisible) {
      setIsVisible(true);
      stableRemoveFromQueue(queueId);
      if (onVisible) onVisible(false);
      stableOnComplete();
      return;
    }

    const sortedQueue = queue.sort((a, b) => a - b);

    if (!isVisible && sortedQueue.includes(queueId) && sortedQueue[0] === queueId) {
      setIsVisible(true);
      if (onVisible) onVisible(true);
      else {
        setTimeout(() => {
          setIsLoaded(true);
          stableOnComplete();
        }, 900);
      }
    }
  }, [queue, queueId, isVisible, onVisible, stableOnComplete, stableRemoveFromQueue]);

  useEffect(() => {
    if (onLoaded) {
      setIsLoaded(true);
      stableOnComplete();
    }
  }, [onLoaded, stableOnComplete]);

  useEffect(() => {
    if (isLoaded) {
      setHasTransition(false);
      stableRemoveFromQueue(queueId);
    }
  }, [isLoaded, stableRemoveFromQueue, queueId]);

  let dynamicClass = "";
  if (!onVisible && !isVisible) {
    dynamicClass = styles.animate + " " + styles.transition;
  } else if (!onVisible && isVisible && hasTransition === true) {
    dynamicClass = styles.show + " " + styles.transition;
  }

  return (
    <div ref={sectionRef} id={id} className={clsx(className, dynamicClass)}>
      {children}
    </div>
  );
}
