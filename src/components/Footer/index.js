"use client";

import React, { useState } from "react";
import clsx from "clsx";
import styles from "./style.module.scss";
import { Social } from "@/components";
import Animated from "@/components/Animated";

export default function Footer({ id, queueId }) {
  const [showFooter, setShowFooter] = useState(false);
  const [hasTransition, setHasTransition] = useState(false);
  const [onLoaded, setOnLoaded] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleVisibilityChange = (animate = true) => {
    if (animate == true) {
      setHasTransition(true);
      setShowFooter(true);

      setTimeout(() => {
        setOnLoaded(true);
        setShowFooter(false);
      }, 600);
    } else {
      setOnLoaded(true);
    }
  };

  return (
    <Animated
      id={id}
      queueId={queueId} 
      className={clsx(
        styles.footer,
        onLoaded !== true ? styles.animate : "",
        hasTransition === true && onLoaded !== true  ? styles.transition : "",
        showFooter ? styles.show : ""
      )}
      onVisible={handleVisibilityChange}
      onLoaded={onLoaded}
    >
      <div className={styles.container}>
        <Social className={styles.social} />
        <p>&copy; {currentYear} Michael Allen</p>
      </div>
    </Animated>
  )
}
