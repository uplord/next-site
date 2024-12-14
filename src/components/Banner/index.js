"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import styles from "./style.module.scss";
import { Buttons, Social } from "@/components";
import Animated from "@/components/Animated";

export default function Banner({ id, queueId }) {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [doAnimate, setDoAnimate] = useState(true);

  const [onLoaded, setOnLoaded] = useState(false);

  const data = {
    title: "<span>Hi, I'm Michael</span> A Front End Developer",
    subtitle: "With 9 years in the industry creating websites",
    buttons: [{
      title: "Get in touch",
      link: "mailto:michael@uplord.co.uk",
      class: "primary large",
    },{
      title: "Download CV",
      link: "/michael-allen-cv.pdf",
      class: "link large",
      target: "_blank",
    }],
    image: {
      src: "/images/me.jpeg",
      alt: "Hi, I'm Michael",
      sizes: "(max-width: 767px) 140px, 500px",
      width: "500",
      height: "500",
    }
  };

  const handleVisibilityChange = (id, animate = true) => {
    if (animate == true) {
      setDoAnimate(true);
    }
    setShowText(true);
    setTimeout(() => setShowImage(true), 600);
    setTimeout(() => setShowMore(true), 1200);
    setTimeout(() => {
      setShowText(false);
      setShowImage(false);
      setDoAnimate(false);

      setOnLoaded(true);
    }, 1600);
  };

  return (
    <Animated 
      id={id}
      queueId={queueId} 
      className={styles.banner} 
      onVisible={handleVisibilityChange}
      onLoaded={onLoaded}
      animated="false"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={clsx(styles.image, doAnimate == true ? styles.animate : "", showImage == true ? styles.show : "")}>
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
              <Social className={styles.social} />
            </div>
          </div>
          <div className={clsx(styles.text, doAnimate == true ? styles.animate : "", showText == true ? styles.show : "")}>
            <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
            <h2>{data.subtitle}</h2>
            <Buttons data={data.buttons} className={styles.buttons} />
          </div>
          <div className={clsx(styles.viewMore, showMore == true && styles.loaded)}></div>
        </div>
      </div>
    </Animated>
  );
}
