"use client";

import React, { useState } from "react";
import clsx from "clsx";
import styles from "./style.module.scss";
import { Social } from "@/components";
import Animated from "@/components/Animated";

export default function Footer({ id, queueId }) {
  const [showFooter, setShowFooter] = useState(false);
  const [doAnimate, setDoAnimate] = useState(true);
  const [onLoaded, setOnLoaded] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleVisibilityChange = (animate = true) => {
    if (animate == true) {
      setDoAnimate(true);
      setShowFooter(true);
    }
    setTimeout(() => {
      setDoAnimate(false);
      setShowFooter(false);
      setOnLoaded(true);
    }, 600);
  };

  return (
    <Animated
      id={id}
      queueId={queueId} 
      className={clsx(styles.footer, doAnimate == true ? styles.animate : "", showFooter == true ? styles.show : "")}
      onVisible={handleVisibilityChange}
      onLoaded={onLoaded}
      animated={false}
    >
      <div className={styles.container}>
        <Social className={styles.social} />
        <p>&copy; {currentYear} Michael Allen</p>
      </div>
    </Animated>
  )
}
