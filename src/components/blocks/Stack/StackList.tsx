import styles from './style.module.scss'
import { Svg } from '@/components/utils'
import { StackListProps } from '@/types/section'

export const StackList = ({
  icon,
  tooltip,
}: StackListProps) => {
  return (
    <div key={icon} className={styles.item}>
      <div className={styles.image} data-tooltip={tooltip}>
        <Svg name={icon} height={60} width={60} />
      </div>
    </div>
  )
}
