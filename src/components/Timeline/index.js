"use client";

import { useState } from "react";
import clsx from "clsx";
import styles from "./style.module.scss";
import Link from "next/link"
import { Svg, Buttons } from "@/components";
import Animated from "@/components/Animated";

export default function Timeline({ id, queueId }) {
  const [showText, setShowText] = useState(false);
  const [hasTransition, setHasTransition] = useState(false);
  const [onLoaded, setOnLoaded] = useState(false);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [onStart, setOnStart] = useState(false);

  const data = {
    id: "timeline",
    title: "My timeline",
    subtitle: "Browse Michael Allen's timeline",
    content: "I have included here my progress through the world of website development from my beginnings at university to my current work I do now. Each stage has helped to build me up to the developer I am today through lots of different projects big and small.",
    buttons: [{
      title: "Get in touch",
      link: "mailto:michael@uplord.co.uk",
      class: "primary",
    }],
    list: [{
      title: "Jan 2025 - Present",
      subtitle: "Software Engineer",
      logo: "leaseloco",
      link: "https://www.leaseloco.com/",
      content: "",
    },{
      title: "Sept 2021 - Jan 2025",
      subtitle: "Senior Front End Developer",
      logo: "snappy-logo",
      link: "https://www.snappyshopper.co.uk/",
      content: "<p>Returning to Hungrrr full time just in time for the merger with Snappy Shopper and continuing to lead the front end of the Hungrrr platform while also assisting the Snappy Shopper team. Updating and improving the ordering platform to keep up with style trends and work better for clients and members in the team.</p><p>Maintaining hundreds of clients websites and making periodic changes to improve their performance and help pull through more sales. Increasing the amount of client enquiries to join the platforms through updates to the B2B websites making it easier to sign up and to keep a track of these leads.</p>",
    },{
      title: "May 2020 - July 2020",
      subtitle: "Front End Developer",
      logo: "hungrrr-logo",
      link: "https://www.hungrrr.co.uk/",
      content: "<p>Leading front end in the company at the beginning of the pandemic. Integrating a table ordering system for businesses reopening to make the users journey easier and opening up this feature to all the client on this platform.</p><p>Developing an internal business setup tool to make it easier for our team to add businesses to our system and also maintain clients. Continuing to do work for them while back at mtc due to the impact I made in the company even in just a short period of time.</p>",
    },{
      title: "Sept 2015 - Sept 2021",
      subtitle: "Front End Developer",
      logo: "mtc-logo",
      link: "https://www.mtc.co.uk/",
      content: "<p>While in mtc I have worked in many areas of the company from leading projects to dealing with aftercare for clients. I was able to work on complex projects early into joining the company without needing much assistance to mentoring newer members of staff.</p><p>I have dealt with hundreds of different websites and have the ability to work to tight deadlines without lowering quality. I have been able to work across multiple teams in the company and am quick to adapt to new situations.</p>",
    }]
  };

  const handleVisibilityChange = (animate = true) => {
    if (animate == true) {
      setHasTransition(true);
      setShowText(true);

      setTimeout(() => {
        setOnStart(true);
      }, 600);
    } else {
      setOnLoaded(true);
    }
  };

  const handleCompleteChange = () => {
    let count = animatedCount + 1;
    setAnimatedCount(count);
    if (count == data.list.length) {
      setOnLoaded(true);
      setShowText(false);
    }
  };

  return (
    <Animated
      id={id}
      queueId={queueId}
      onVisible={handleVisibilityChange}
      onLoaded={onLoaded}
      className={styles.timeline}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.list}>
            {data.list.map((item, index) => (
              <Animated
                key={index}
                queueId={index}
                onStart={onStart}
                onComplete={handleCompleteChange}
                queueType="timeline"
                className={styles.item}
              >
                <h4>{item.title}</h4>
                <h3>{item.subtitle}</h3>
                <Link href={item.link} target="_blank">
                  <Svg name={item.logo} height={32} />
                </Link>
                <div className={styles.content}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
              </Animated>
            ))}
          </div>
          <div className={clsx(
            styles.text,
            onLoaded !== true ? styles.animate : "",
            hasTransition === true && onLoaded !== true  ? styles.transition : "",
            showText ? styles.show : ""
          )}>
            <h3>{data.title}</h3>
            <h2>{data.subtitle}</h2>
            {data.content && (
              <p>{data.content}</p>
            )}
            <Buttons data={data.buttons} className={styles.buttons} />
          </div>
        </div>
      </div>
    </Animated>
  )
}
