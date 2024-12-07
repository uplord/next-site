import React from "react";
import Link from 'next/link'
import styles from "./style.module.scss";
import { Svg } from "@/components";

export default function Social() {
  const data = [{
    icon: "linkedin-in-brands-solid",
    link: "https://www.linkedin.com/in/themichael/",
    class: styles.linkedin,
    target: ""
  },{
    icon: "instagram-brands-solid",
    link: "https://www.instagram.com/michael.adam.allen/",
    class: styles.instagram,
    target: ""
  },{
    icon: "envelope-solid",
    link: "mailto:michael@uplord.co.uk",
    class: "",
    target: "_blank"
  }]

  return (
    <div className={styles.social}>
      {data.map((item, index) => (
        <Link key={index}
          href={item.link}
          {...(item.target && { "target": item.target })}
          {...(item.class && { "className": item.class })}
        >
          <Svg name={item.icon} width={20} height={20} color="#fff" />
        </Link>
      ))}
    </div>
  )
}
