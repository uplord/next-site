import styles from '@/app/page.module.scss'
import { Header, Footer, Banner, Section, Projects, Timeline, Stack } from '@/components'
import { useBreakpoints } from '@/utils/useBreakpoints'

import bannerData from '@/data/banner.json'
import sectionData from '@/data/section.json'
import projectsData from '@/data/projects.json'
import timelineData from '@/data/timeline.json'
import stackData from '@/data/stack.json'

export default function Home() {
  const breakpoints = useBreakpoints()

  return (
    <div className={styles.page}>
      <Header home={true} />
      <main className={styles.main}>
        <Banner id="banner" queueId={0} data={bannerData} />
        <Section id="about-me" queueId={1} data={sectionData} />
        <Projects id="projects" queueId={2} data={projectsData} />
        <Timeline id="timeline" queueId={3} data={timelineData} />
        <Stack id="stack" queueId={4} data={stackData} />
      </main>
      <Footer id="footer" queueId={5} />
    </div>
  )
}
