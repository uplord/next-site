import Link from "next/link";
import clsx from "clsx";
import styles from "./style.module.scss";
import { Svg } from "@/components";

const generateContent = (data) => (
  data.title || (data.icon && <Svg name={data.icon} width={20} height={20} />)
);

export default function Button({ data }) {
  const buttonClasses = clsx(
    styles.button,
    ...data.class.split(" ").map((name) => styles[name] || "")
  );

  const Content = generateContent(data);

  const ButtonComponent = data.link ? (
    <Link href={data.link} className={buttonClasses} target={data.target || undefined}>
      {Content}
    </Link>
  ) : (
    <button type="button" className={buttonClasses} onClick={data.onClick}>
      {Content}
    </button>
  );

  return ButtonComponent;
}

export function Buttons({ data, className = "" }) {
  return (
    <div className={`${styles.buttons} ${className}`}>
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
