import styles from "./style.module.scss";
import Image from "next/image";
import { Svg } from "@/components";
import Animated from "@/components/Animated";
import { useBreakpoints } from "@/utils/useBreakpoints";

const data = {
  title: "Projects I've worked on",
  list: [
    { type: "svg", name: "brewdog", tooltip: "Brewdog" },
    { type: "svg", name: "gdk", tooltip: "German Doner Kebab" },
    { type: "svg", name: "subway", tooltip: "Subway" },
    { type: "svg", name: "umbro", tooltip: "Umbro" },
    { type: "svg", name: "superga", tooltip: "Superga" },
    { type: "svg", name: "dundeeunited", tooltip: "Dundee United Football Club" },
    { type: "svg", name: "hungrrr", tooltip: "Hungrrr" },
    { type: "svg", name: "snappy", tooltip: "Snappy Shopper" },
    { type: "svg", name: "macdonalds", tooltip: "Macdonald Hotels & Resorts" },
    { type: "svg", name: "campbells", tooltip: "Campbells Meat" },
    { type: "image", src: "/images/petervardy.png", alt: "Peter Vardy", tooltip: "Peter Vardy" },
    { type: "image", src: "/images/carmoney.png", alt: "CarMoney", tooltip: "CarMoney" },
  ]
};

export default function Projects({ id, queueId }) {
  const breakpoints = useBreakpoints();

  return (
    <Animated id={id} queueId={queueId} className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>{data.title}</h2>
          </div>
          <div className={styles.list}>
            {data.list.map((item, index) => (
              <div
                key={index}
                className={styles.item}
              >
                <div
                  className={styles.image}
                  {...(item.tooltip && { "data-tooltip": item.tooltip })}
                >
                  {item.type === "svg" ? (
                    <Svg
                      name={item.name}
                      width={900}
                      height={600}
                    />
                  ) : (
                    item.src && (
                      <Image
                        src={item.src}
                        alt={item.alt || "Project Image"}
                        quality={80}
                        sizes={`(max-width: ${breakpoints.md - 1}px) 360px, 326px`}
                        width={326}
                        height={218}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className={styles.viewMore}>
            Swipe to view more{" "}
            <Svg name="arrow-right-long-solid" width={16} height={16} />
          </p>
        </div>
      </div>
    </Animated>
  );
}
