import styles from '@/app/page.module.scss'

import Header from '@/components/styleguide/Header'
import Footer from '@/components/styleguide/Footer'
import Banner from '@/components/blocks/Banner'
import Section from '@/components/blocks/Section'
import Projects from '@/components/blocks/Projects'
import Timeline from '@/components/blocks/Timeline'
import Stack from '@/components/blocks/Stack'

import banner from '@/data/banner.json'
import section from '@/data/section.json'
import projects from '@/data/projects.json'
import timeline from '@/data/timeline.json'
import stack from '@/data/stack.json'

export default function Home() {

  return (
    <div className={styles.page}>
      <Header home={true} />
      <main className={styles.main}>
        <Banner 
         id="banner"
         title={banner.title}
         subtitle={banner.subtitle}
         buttons={banner.buttons}
         image={banner.image}
         hasHeader={true}
        />
        <Section
          id="about-me"
          title={section.title}
          subtitle={section.subtitle}
          content={section.content}
          buttons={section.buttons}
          image={section.image}
        />
        <Projects
          id="projects"
          title={projects.title}
          list={projects.list}
        />
        <Timeline
          id="timeline"
          title={timeline.title}
          subtitle={timeline.subtitle}
          content={timeline.content}
          buttons={timeline.buttons}
          list={timeline.list}
          hasHeader={true}
        />
        <Stack
          id="stack"
          title={stack.title}
          list={stack.list}
        />
      </main>
      <Footer id="footer" />
    </div>
  )
}
