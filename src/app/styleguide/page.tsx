import styles from '@/app/page.module.scss'
import Header from '@/components/styleguide/Header'
import Footer from '@/components/styleguide/Footer'

import { ButtonGroup, Button } from '@/components/ui/Button'
import { Link } from '@/components/ui/Link'
import { Variant } from '@/types/button'
import { Size } from '@/types/size'

export default function Styleguide() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.row}>
              <ButtonGroup>
                <Button
                  label="Button"
                  size={Size.Small}
                  variant={Variant.Default}
                />

                <Button
                  label="Button"
                  size={Size.Medium}
                  variant={Variant.Default}
                />

                <Button
                  label="Button"
                  size={Size.Large}
                  variant={Variant.Default}
                />
              </ButtonGroup>

              <ButtonGroup>
                <Button
                  label="Button"
                  size={Size.Small}
                  variant={Variant.Primary}
                />

                <Button
                  label="Button"
                  size={Size.Medium}
                  variant={Variant.Primary}
                />

                <Button
                  label="Button"
                  size={Size.Large}
                  variant={Variant.Primary}
                />
              </ButtonGroup>

              <ButtonGroup>
                <Button
                  label="Button"
                  size={Size.Small}
                  variant={Variant.Success}
                />

                <Button
                  label="Button"
                  size={Size.Medium}
                  variant={Variant.Success}
                />

                <Button
                  label="Button"
                  size={Size.Large}
                  variant={Variant.Success}
                />
              </ButtonGroup>

              <ButtonGroup>
                <Button
                  label="Leading Icon"
                  size={Size.Medium}
                  variant={Variant.Default}
                  leadingIcon="MoveLeft"
                />
                <Button
                  size={Size.Medium}
                  variant={Variant.Default}
                  trailingIcon="Home"
                />
                <Button
                  label="Trailing Icon"
                  size={Size.Medium}
                  variant={Variant.Default}
                  trailingIcon="MoveRight"
                />
              </ButtonGroup>

              <ButtonGroup>
                <Button
                  label="Disabled"
                  size={Size.Medium}
                  variant={Variant.Default}
                  disabled={true}
                />
                <Button
                  label="Not Loading"
                  size={Size.Medium}
                  variant={Variant.Default}
                />
                <Button
                  label="Not Loading"
                  size={Size.Medium}
                  variant={Variant.Default}
                  isLoading={true}
                />
              </ButtonGroup>

              <ButtonGroup>
                <Link
                  label="Disabled"
                  href="/"
                  size={Size.Medium}
                  variant={Variant.Default}
                />
              </ButtonGroup>
            </div>
          </div>
        </div>
      </main>
      <Footer id="footer" />
    </div>
  )
}
