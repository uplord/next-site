'use client'

import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import styles from './style.module.scss'
import Logo from '@/components/styleguide/Logo'
import Toggle from '@/components/ui/Toggle'
import Particles from '@/components/utils/Particles'
import { useScroll } from '@/utils/scrollUtils'

type HeaderProps = {
  className?: string
  home?: boolean
}

export const Header = ({ className, home = false }: HeaderProps) => {
  const isScrolled = useScroll()

  return (
    <div className={clsx(styles.header, isScrolled || !home ? styles.scrolled : '', className, home == true && styles.home )}>
      <Particles id="particles-header" className={styles.particles} />
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <Navigation />
        <Toggle />
      </div>
    </div>
  )
}

export function Navigation() {
  const data = [{
    title: 'Home',
    link: '/',
  },{
    title: 'About me',
    link: '/#about-me',
  },{
    title: 'Projects',
    link: '/#projects',
  },{
    title: 'Timeline',
    link: '/#timeline',
  },{
    title: 'Contact',
    link: 'mailto:michael@uplord.co.uk',
  }]

  return (
    <div className={styles.navigation}>
      {data.map((item) => (
        <Link key={item.title} href={item.link}>{item.title}</Link>
      ))}
    </div>
  )
}

