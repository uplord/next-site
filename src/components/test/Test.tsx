import styles from './style.module.scss'

export type TestProps = {
  id: number
}

export const Test = ({ id } : TestProps) => {
  return (
    <div className={styles.test}>Test - {id}</div>
  )
}
