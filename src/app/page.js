import styles from "./page.module.scss";
import { Header, Footer, Banner, Section, Projects, Timeline, Stack } from "@/components";

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Banner id="banner" queueId="0"  />
        <Section id="about-me" queueId="1" />
        <Projects id="projects" queueId="2" />
        <Timeline id="timeline" queueId="3" />
        <Stack id="stack" queueId="4" />
      </main>
      <Footer id="footer" queueId="5" />
    </div>
  );
}
