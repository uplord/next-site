import styles from "./style.module.scss";
import Svg from "@/components/Svg";
import Animated from "@/components/Animated";

export default function Stack({ id, queueId }) {
  const data = {
    title: "My current stack",
    list: [{
      icon: "html5",
      tooltip: "HTML5",
    },{
      icon: "css",
      tooltip: "CSS",
    },{
      icon: "js",
      tooltip: "JavaScript",
    },{
      icon: "sass",
      tooltip: "Sass",
    },{
      icon: "react",
      tooltip: "React",
    },{
      icon: "nextjs",
      tooltip: "NextJs",
    },{
      icon: "typescript",
      tooltip: "TypeScript",
    },{
      icon: "git",
      tooltip: "Git",
    },{
      icon: "github",
      tooltip: "Github",
    },{
      icon: "aws",
      tooltip: "Amazon Web Services",
    },{
      icon: "netlify",
      tooltip: "Netlify",
    },{
      icon: "vscode",
      tooltip: "VS Code",
    }]
  }

  return (
    <Animated id={id} queueId={queueId} className={styles.stack}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>{data.title}</h2>
          </div>
          <div className={styles.list}>
            {data.list.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.image} data-tooltip={item.tooltip}>
                  <Svg name={item.icon} width={60} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Animated>
  );
}
