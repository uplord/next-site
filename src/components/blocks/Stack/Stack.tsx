import styles from './style.module.scss'
import { Svg, Animated } from '@/components/utils'
import { StackProps } from '@/types/section'

export const Stack = ({ id, queueId, data }: StackProps) => {

  const Content = (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>{data.title}</h2>
        </div>
        <div className={styles.list}>
          {data.list.map((item) => (
            <div key={item.icon} className={styles.item}>
              <div className={styles.image} data-tooltip={item.tooltip}>
                <Svg name={item.icon} width={60} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  if (queueId != null) {
    return (
      <Animated id={id} queueId={queueId} className={styles.stack}>
        {Content}
      </Animated>
    )
  }

  return (
    <div id={id} className={styles.stack}>
      {Content}
    </div>
  )
}
