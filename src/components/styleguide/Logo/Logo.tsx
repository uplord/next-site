import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './style.module.scss';

type LogoProps = {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={clsx(styles.logo, className)}>
      <span className={styles.icon}>M</span>
      The<span className={styles.primary}>Michael</span>
    </Link>
  );
}
