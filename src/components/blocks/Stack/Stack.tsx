import styles from './style.module.scss'
import { Svg } from '@/components/utils'
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
              <div key={item.icon} className={styles.item}>
                <div className={styles.image} data-tooltip={item.tooltip}>
                  <Svg name={item.icon} height={60} width={60} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
