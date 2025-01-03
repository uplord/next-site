"use client";

import React from "react";
import Link from 'next/link'
import clsx from "clsx";
import styles from "./style.module.scss";
import { Logo } from "@/components";
import Toggle from "@/components/Toggle";
import Particles from "@/components/Particles";
import { useScroll } from "@/utils/scrollUtils";

export default function Header({ className, home = false }) {
  const isScrolled = useScroll();

  return (
    <div className={clsx(styles.header, isScrolled ? styles.scrolled : '', className, home == true && styles.home )}>
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
    title: "Home",
    link: "/",
  },{
    title: "About me",
    link: "/#about-me",
  },{
    title: "Projects",
    link: "/#projects",
  },{
    title: "Timeline",
    link: "/#timeline",
  },{
    title: "Contact",
    link: "mailto:michael@uplord.co.uk",
  }];

  return (
    <div className={styles.navigation}>
      {data.map((item, index) => (
        <Link key={index} href={item.link}>{item.title}</Link>
      ))}
    </div>
  )
}

