import Image from 'next/image';
import styles from "./style.module.scss"
import { Buttons } from '@/components';
import Animated from '@/components/Animated';

export default function Section({ dataid }) {
  const buttons = [{
    title: 'Get in touch',
    link: 'mailto:michael@uplord.co.uk',
    class: 'primary',
  }];

  return (
    <Animated dataid={dataid} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image
              src="/images/me.png"
              alt="Michael Allen"
              quality={80}
              width={500}
              height={617}
              priority
            />
          </div>
          <div className={styles.text}>
            <h2>About Michael Allen</h2>
            <h3>Front End Development</h3>
            <p>I&apos;m an experienced Front End Developer with excellent collaboration, organization, and teamwork skills. Passionate about developing in HTML, CSS, and JavaScript and always open to exploring new technologies. Over the last 9 years, I&apos;ve worked with various clients, helping me hone my analytical, debugging, and problem-solving skills to create exceptional websites.</p>
            <Buttons data={buttons} className={styles.buttons} />
          </div>
        </div>
      </div>
    </Animated>
  )
}
