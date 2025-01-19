import styles from './style.module.scss'
import Svg from '@/components/utils/Svg'
import Animated from '@/components/utils/Animated'
import { SectionProps } from '@/types/section'

export const Stack = ({ id, queueId }: SectionProps) => {
  const data = {
    title: 'My current stack',
    list: [{
      icon: 'html5',
      tooltip: 'HTML5',
    },{
      icon: 'css',
      tooltip: 'CSS',
    },{
      icon: 'js',
      tooltip: 'JavaScript',
    },{
      icon: 'sass',
      tooltip: 'Sass',
    },{
      icon: 'react',
      tooltip: 'React',
    },{
      icon: 'nextjs',
      tooltip: 'NextJs',
    },{
      icon: 'typescript',
      tooltip: 'TypeScript',
    },{
      icon: 'git',
      tooltip: 'Git',
    },{
      icon: 'github',
      tooltip: 'Github',
    },{
      icon: 'aws',
      tooltip: 'Amazon Web Services',
    },{
      icon: 'netlify',
      tooltip: 'Netlify',
    },{
      icon: 'vscode',
      tooltip: 'VS Code',
    }]
  }

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
