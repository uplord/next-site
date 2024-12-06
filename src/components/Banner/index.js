'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './style.module.scss';
import { Buttons } from '@/components';
import Animated from '@/components/Animated';

export default function Banner({ dataid }) {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [doAnimate, setDoAnimate] = useState(true);

  const buttons = [{
    title: 'Get in touch',
    link: 'mailto:michael@uplord.co.uk',
    class: 'primary large',
  },{
    title: 'Download CV',
    link: '/michael-allen-cv.pdf',
    class: 'link large',
    target: '_blank',
  }];

  const handleVisibilityChange = (id, animate = true) => {
    console.log('animate', animate)
    if (animate == true) {
      setDoAnimate(true);
    }
    setShowText(true);
    setTimeout(() => setShowImage(true), 300);
    setTimeout(() => {
      setShowText(false);
      setShowImage(false);
      setDoAnimate(false);
    }, 1300);
  };

  return (
    <Animated 
      dataid={dataid} 
      className={styles.banner} 
      onVisible={handleVisibilityChange}
      animated="false"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.image} ${doAnimate == true ? styles.animate : ''} ${showImage == true ? styles.show : ''}`}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/me.jpeg"
                alt="Hi, I&apos;m Michael"
                quality={80}
                priority
                sizes="(max-width: 767px) 140px, 500px"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className={`${styles.text} ${doAnimate == true ? styles.animate : ''} ${showText == true ? styles.show : ''}`}>
            <h1><span>Hi, I&apos;m Michael</span> A Front End Developer</h1>
            <h2>With 9 years in the industry creating websites</h2>
            <Buttons data={buttons} className={styles.buttons} />
          </div>
        </div>
      </div>
    </Animated>
  );
}
