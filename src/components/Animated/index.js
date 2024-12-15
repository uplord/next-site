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
        if (!onVisible) {
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
      setIsVisible(true);
      removeFromQueue(queueId);
      if (onVisible) {
        onVisible(false);
      }
      return;
    }

    const sortedQueue = queue.sort((a, b) => a - b);

    if (sortedQueue.includes(queueId) && sortedQueue[0] === queueId) {
      setIsVisible(true);
      if (onVisible) {
        onVisible(true);
      } else {
        setTimeout(() => setIsLoaded(true), 1200);
      }
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
