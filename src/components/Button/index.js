import Link from "next/link";
import clsx from "clsx";
import styles from "./style.module.scss";
import { Svg } from "@/components";

export default function Button({ data }) {
  const buttonClasses = clsx(
    styles.button, 
    ...data.class.split(" ").map((name) => styles[name] || "")
  );

  const Content = data.title ? (
    data.title
  ) : (
    data.icon && <Svg name={data.icon} width={20} height={20} />
  );

  return data.link ? (
    <Link
      href={data.link}
      className={buttonClasses}
      target={data.target || undefined}
    >
      {Content}
    </Link>
  ) : (
    <button
      type="button"
      className={buttonClasses}
      onClick={data.onClick}
    >
      {Content}
    </button>
  );
}
