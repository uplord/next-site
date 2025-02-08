import { ReactNode } from 'react'
import styles from './style.module.scss'

export interface ButtonGroupProps {
  children: ReactNode
}
export function ButtonGroup({ children }: ButtonGroupProps) {
  return <div className={styles.group}>{children}</div>
}
