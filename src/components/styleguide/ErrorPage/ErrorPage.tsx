'use client'

import styles from './style.module.scss'
import Logo from '@/components/styleguide/Logo'
import { Buttons } from '@/components/ui/Button'
import Particles from '@/components/utils/Particles'

export const ErrorPage = () => {
  const data = {
    title: 'Page not found',
    content: 'We couldn\'t find the page you are looking for.',
    buttons: [
      { title: 'Go back to the homepage', link: '/', class: 'primary' },
    ],
  }

  return (
    <div className={styles.error}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Logo className={styles.logo} />
          <h1>{data.title}</h1>
          <p>{data.content}</p>
          <Buttons data={data.buttons} className={styles.buttons} />
        </div>
        <Particles id="particles-header" />
      </div>
    </div>
  )
}

