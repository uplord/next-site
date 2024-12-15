import React from "react";
import Link from 'next/link'
import clsx from "clsx";
import styles from "./style.module.scss";
import { Svg } from "@/components";

export default function Social({ className = "" }) {
  const data = [{
    icon: "linkedin-in-brands-solid",
    link: "https://www.linkedin.com/in/themichael/",
    class: styles.linkedin,
    target: "_blank"
  },{
    icon: "instagram-brands-solid",
    link: "https://www.instagram.com/michael.adam.allen/",
    class: styles.instagram,
    target: "_blank"
  },{
    icon: "github-brands-solid",
    link: "https://github.com/uplord/",
    class: styles.github,
    target: "_blank"
  },{
    icon: "envelope-solid",
    link: "mailto:michael@uplord.co.uk",
    class: styles.default,
    target: ""
  }]

  return (
    <div className={clsx(styles.social, className)}>
      {data.map((item, index) => (
        <Link key={index}
          href={item.link}
          {...(item.target && { "target": item.target })}
          {...(item.class && { "className": item.class })}
        >
          <Svg name={item.icon} width={20} height={20} />
        </Link>
      ))}
    </div>
  )
}
