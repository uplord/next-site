import styles from './style.module.scss'
import Link from 'next/link'
import { Buttons } from '@/components/ui/Button'
import { Svg } from '@/components/utils'
import { TimelineProps, TimelineListProps } from '@/types/section'

export const Timeline = ({ id, data }: TimelineProps) => {

  const ListContent = ({ item }: { item: TimelineListProps }) => (
    <>
      <h4>{item.title}</h4>
      <h3>{item.subtitle}</h3>
      <Link href={item.link} target="_blank">
        <Svg name={item.logo} height={32} />
      </Link>
      {item.content && (
        <div className={styles.content}
          dangerouslySetInnerHTML={{ __html: item.content }}
        ></div>
      )}
    </>
  )

  return (
    <div id={id} className={styles.timeline}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.list}>
            {data.list.map((item, index) => (
              <div
                key={index}
                className={styles.item}
              >
                <ListContent item={item} />
              </div>
            ))}
          </div>
          <div className={styles.text}>
            <h3>{data.title}</h3>
            <h2>{data.subtitle}</h2>
            {data.content && (
              <p>{data.content}</p>
            )}
            {data.buttons && (
              <Buttons data={data.buttons} className={styles.buttons} />
            )}
          </div>
        </div>
    </div>
    </div>
  )
}
