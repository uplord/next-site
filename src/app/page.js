import styles from "./page.module.scss";
import { Header, Footer, Banner, Section, Projects, Timeline, Stack } from "@/components";

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Banner dataid="0"  />
        <Section dataid="1" />
        <Projects dataid="2" />
        <Timeline dataid="3" />
        <Stack dataid="4" />
      </main>
      <Footer />
    </div>
  );
}
