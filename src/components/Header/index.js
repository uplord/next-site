"use client";

import React from "react";
import styles from "./style.module.scss";
import { Logo } from "@/components";
import Navigation from './Navigation';
import Toggle from "@/components/Toggle";
import { useScroll } from "@/utils/scrollUtils";

export default function Header() {
  const isScrolled = useScroll();

  return (
    <div className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <Navigation />
        <Toggle />
      </div>
    </div>
  )
}
