import React from "react";
import Link from 'next/link'
import styles from "./style.module.scss";
import { Svg } from "@/components";

export default function Social() {
  return (
    <div className={styles.social}>
      <Link href="https://www.linkedin.com/in/themichael/" target="_blank" className={styles.linkedin}>
        <Svg name="linkedin-in-brands-solid" width={20} height={20} color="#fff" />
      </Link>
      <Link href="https://www.instagram.com/michael.adam.allen/" target="_blank" className={styles.instagram}>
        <Svg name="instagram-brands-solid" width={20} height={20} color="#fff" />
      </Link>
      <Link href="mailto:michael@uplord.co.uk">
        <Svg name="envelope-solid" width={20} height={20} color="#fff" />
      </Link>
    </div>
  )
}
