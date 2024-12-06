import styles from "./page.module.scss";
import { Header, Footer, Banner, Section, Projects, Timeline, Stack } from "@/components";

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Banner />
        <Section />
        <Projects />
        <Timeline />
        <Stack />
      </main>
      <Footer />
    </div>
  );
}
