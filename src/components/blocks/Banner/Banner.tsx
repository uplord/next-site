'use client';

import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';
import { Buttons, Social } from '@/components';
import Animated from '@/components/utils/Animated';
import Particles from '@/components/utils/Particles';
import { useBreakpoints } from '@/utils/useBreakpoints';
import { useSeason } from '@/utils/seasonTheme';
import { SectionProps } from '@/types/section';

export const Banner = ({ id, queueId }: SectionProps) => {
  const breakpoints = useBreakpoints();
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [hasTransition, setHasTransition] = useState(false);
  const [onLoaded, setOnLoaded] = useState(false);

  const season = useSeason();

  const data = {
    title: '<span>Hi, I\'m Michael</span> A Front End Developer',
    subtitle: 'With 9 years in the industry creating websites',
    buttons: [{
      title: 'Get in touch',
      link: 'mailto:michael@uplord.co.uk',
      class: 'primary large',
    },{
      title: 'Download CV',
      link: '/michael-allen-cv.pdf',
      class: 'link large',
      target: '_blank',
    }],
    image: {
      src: season == 'xmas' ? '/images/me-santa.png' : '/images/me.jpeg',
      alt: 'Hi, I\'m Michael',
      sizes: `(max-width: ${breakpoints.md - 1}px) 140px, 500px`,
      width: 500,
      height: 499,
    }
  };

  const handleVisibilityChange = (animate = true) => {
    if (animate) {
      setHasTransition(true);
      setShowText(true);
      setTimeout(() => setShowImage(true), 900);
      setTimeout(() => setShowMore(true), 1500);

      setTimeout(() => {
        setOnLoaded(true);
        setShowText(false);
        setShowImage(false);
        setShowMore(false);
      }, 2400);
    } else {
      setOnLoaded(true);
    }
  };

  return (
    <Animated 
      id={id}
      queueId={queueId} 
      className={styles.banner} 
      onVisible={handleVisibilityChange}
      onLoaded={onLoaded}
    >
      <Particles id="particles-banner" />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={clsx(
            styles.image,
            onLoaded !== true ? styles.animate : '',
            hasTransition === true && onLoaded !== true  ? styles.transition : '',
            showImage ? styles.show : ''
          )}>
            <div className={styles.imageWrap}>
              <Image
                src={data.image.src}
                alt={data.image.alt}
                quality={80}
                priority={true}
                sizes={data.image.sizes}
                width={data.image.width}
                height={data.image.height}
              />
              <Social className={styles.social} />
            </div>
          </div>
          <div className={clsx(
            styles.text,
            onLoaded !== true ? styles.animate : '',
            hasTransition === true && onLoaded !== true  ? styles.transition : '',
            showText ? styles.show : ''
          )}>
            <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
            <h2>{data.subtitle}</h2>
            <Buttons data={data.buttons} className={styles.buttons} />
          </div>
          <div className={clsx(
            styles.viewMore,
            onLoaded !== true ? styles.animate : '',
            hasTransition === true && onLoaded !== true  ? styles.transition : '',
            showMore ? styles.show : ''
          )}></div>
        </div>
      </div>
    </Animated>
  );
}
