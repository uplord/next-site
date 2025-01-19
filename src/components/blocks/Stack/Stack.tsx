import styles from './style.module.scss'
import Svg from '@/components/utils/Svg'
import Animated from '@/components/utils/Animated'
import { StackProps } from '@/types/section'

export const Stack = ({ id, queueId, data }: StackProps) => {

  const Content = (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>{data.title}</h2>
        </div>
        <div className={styles.list}>
          {data.list.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.image} data-tooltip={item.tooltip}>
                <Svg name={item.icon} width={60} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  if (queueId) {
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
