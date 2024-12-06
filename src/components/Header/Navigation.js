import React from 'react';
import Link from 'next/link'
import styles from './style.module.scss';

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <Link href="/">Home</Link>
      <Link href="/#about-me">About me</Link>
      <Link href="/#projects">Projects</Link>
      <Link href="/#timeline">Timeline</Link>
      <Link href="mailto:michael@uplord.co.uk">Contact</Link>
    </div>
  )
}
