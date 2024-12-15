"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import styles from "./style.module.scss"
import { Buttons } from "@/components";
import Animated from "@/components/Animated";

export default function Section({ id, queueId }) {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);

  const [hasTransition, setHasTransition] = useState(false);
  const [onLoaded, setOnLoaded] = useState(false);

  const data = {
    title: "About Michael Allen",
    subtitle: "Front End Development",
    content: "I'm an experienced Front End Developer with excellent collaboration, organization, and teamwork skills. Passionate about developing in HTML, CSS, and JavaScript and always open to exploring new technologies. Over the last 9 years, I've worked with various clients, helping me hone my analytical, debugging, and problem-solving skills to create exceptional websites.",
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

  const handleVisibilityChange = (animate = true) => {
    if (animate == true) {
      setHasTransition(true);

      if (window.innerWidth < 768) {
        setShowText(true);
        setShowImage(true);

        setTimeout(() => {
          setOnLoaded(true);
          setShowText(false);
          setShowImage(false);
        }, 900);
      } else {
        setShowText(true);
        setTimeout(() => setShowImage(true), 900);

        setTimeout(() => {
          setOnLoaded(true);
          setShowText(false);
          setShowImage(false);
        }, 1800);
      }
    } else {
      setOnLoaded(true);
    }
  };

  return (
    <Animated 
      id={id}
      queueId={queueId}
      className={clsx(styles.section)}
      onVisible={handleVisibilityChange}
      onLoaded={onLoaded}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={clsx(
            styles.image,
            onLoaded !== true ? styles.animate : "",
            hasTransition === true && onLoaded !== true  ? styles.transition : "",
            showImage ? styles.show : ""
          )}>
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
          <div className={clsx(
            styles.text,
            onLoaded !== true ? styles.animate : "",
            hasTransition === true && onLoaded !== true  ? styles.transition : "",
            showText ? styles.show : ""
          )}>
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
