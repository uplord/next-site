import styles from "./not-found.module.scss";
import { Logo, Buttons } from "@/components";

export const metadata = {
  title: "404 Page not found",
  description: "",
};

export default function NotFound() {
  const data = {
    title: "Page not found",
    content: "We couldn't find the page you are looking for.",
    buttons: [
      { title: "Go back to the homepage", link: "/", class: "primary" },
    ],
  };

  return (
    <div className={styles.error}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Logo className={styles.logo} />
          <h1>{data.title}</h1>
          <p>{data.content}</p>
          <Buttons data={data.buttons} className={styles.buttons} />
        </div>
      </div>
    </div>
  );
}
