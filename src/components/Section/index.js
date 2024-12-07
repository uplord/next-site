import Image from "next/image";
import styles from "./style.module.scss"
import { Buttons } from "@/components";
import Animated from "@/components/Animated";

export default function Section({ dataid }) {
  const data = {
    id: "about-me",
    title: "About Michael Allen",
    subtitle: "Front End Development",
    content: "I'm an experienced Front End Developer with excellent collaboration, organization, and teamwork skills. Passionate about developing in HTML, CSS, and JavaScript and always open to exploring new technologies. Over the last 9 years, I&apos;ve worked with various clients, helping me hone my analytical, debugging, and problem-solving skills to create exceptional websites.",
    buttons: [{
      title: "Get in touch",
      link: "mailto:michael@uplord.co.uk",
      class: "primary",
    }],
    image: {
      src: "/images/me.png",
      alt: "Michael Allen",
      sizes: "(max-width: 767px) 240px, 500px",
      width: "500",
      height: "617",
    }
  };

  return (
    <Animated dataid={dataid} id={data.id} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <div className={styles.imageWrap}>
              <Image
                src={data.image.src}
                alt={data.image.alt}
                quality={80}
                priority
                sizes={data.image.sizes}
                width={data.image.width}
                height={data.image.height}
              />
            </div>
          </div>
          <div className={styles.text}>
            <h2>{data.title}</h2>
            <h3>{data.subtitle}</h3>
            <p>{data.content}</p>
            <Buttons data={data.buttons} className={styles.buttons} />
          </div>
        </div>
      </div>
    </Animated>
  )
}
