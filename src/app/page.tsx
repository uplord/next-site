import styles from '@/app/page.module.scss'

import Header from '@/components/styleguide/Header'
import Footer from '@/components/styleguide/Footer'
import Banner from '@/components/blocks/Banner'
import Section from '@/components/blocks/Section'
import Projects from '@/components/blocks/Projects'
import Timeline from '@/components/blocks/Timeline'
import Stack from '@/components/blocks/Stack'

import bannerData from '@/data/banner.json'
import sectionData from '@/data/section.json'
import projectsData from '@/data/projects.json'
import timelineData from '@/data/timeline.json'
import stackData from '@/data/stack.json'

export default function Home() {

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
