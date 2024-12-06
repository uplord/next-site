import styles from "./style.module.scss";
import { Button } from "@/components";

export default function Buttons({ data, className }) {
  return (
    <div className={`${styles.buttons} ${className || ""}`}>
      {data.map((button, index) => (
        <Button
          key={index}
          data={{
            ...button,
            link: button.link || null,
            onClick: button.onClick || (() => {}),
          }}
        />
      ))}
    </div>
  );
}
