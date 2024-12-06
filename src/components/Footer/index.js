import React from "react";
import styles from "./style.module.scss";
import { Social } from "@/components";
import Animated from '@/components/Animated';

export default function Footer({ dataid }) {
  const currentYear = new Date().getFullYear();

  return (
    <Animated dataid={dataid} className={styles.footer}>
      <div className={styles.container}>
        <Social />
        <p>&copy; {currentYear} Michael Allen</p>
      </div>
    </Animated>
  )
}
