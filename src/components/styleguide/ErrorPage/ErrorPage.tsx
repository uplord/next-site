'use client'

import styles from './style.module.scss'
import Logo from '@/components/styleguide/Logo'
import { ButtonGroup } from '@/components/ui/Button'
import { Link } from '@/components/ui/Link'
import { Variant } from '@/types/button'
import { Size } from '@/types/size'
import Particles from '@/components/utils/Particles'

export const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Logo className={styles.logo} />
          <h1>Page not found</h1>
          <p>We couldn&apos;t find the page you are looking for.</p>
          <ButtonGroup className={styles.buttons}>
            <Link
              label="Go back to the homepage"
              href="/"
              size={Size.Large}
              variant={Variant.Primary}
            />
          </ButtonGroup>
        </div>
        <Particles id="particles-header" />
      </div>
    </div>
  )
}
