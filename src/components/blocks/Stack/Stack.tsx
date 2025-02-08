import styles from './style.module.scss'
import { StackList } from './StackList'
import { StackProps } from '@/types/section'

export const Stack = ({ id, data }: StackProps) => {
  return (
    <div id={id} className={styles.stack}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>{data.title}</h2>
          </div>
          <div className={styles.list}>
            {data.list.map((item) => (
              <StackList
                icon={item.icon}
                tooltip={item.tooltip}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
