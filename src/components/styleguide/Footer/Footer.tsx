'use client'

import React from 'react'
import styles from './style.module.scss'
import Social from '@/components/styleguide/Social'
import { DefaultProps } from '@/types/section'

export const Footer = ({ id }: DefaultProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <div id={id} className={styles.footer}>
      <div className={styles.container}>
        <Social className={styles.social} />
        <p>&copy; {currentYear} Michael Allen</p>
      </div>
    </div>
  )
}
