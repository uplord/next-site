import React from "react";
import styles from "./style.module.scss";
import { Social } from "@/components";

export default function Footer({ dataid }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <Social className={styles.social} />
        <p>&copy; {currentYear} Michael Allen</p>
      </div>
    </div>
  )
}
