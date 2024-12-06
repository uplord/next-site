import styles from "./style.module.scss";
import Svg from '@/components/Svg';

export default function Stack() {
  return (
    <div className={styles.stack}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>My current stack</h2>
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.image} data-tooltip="HTML5">
                <Svg name="html5" width={60} />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image} data-tooltip="CSS">
                <Svg name="css" width={60} />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image} data-tooltip="JavaScript">
                <Svg name="js" width={60} />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image} data-tooltip="Sass">
                <Svg name="sass" width={60} />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image} data-tooltip="React">
                <Svg name="react" width={60} />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image} data-tooltip="NextJs">
                <Svg name="nextjs" width={60} />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image} data-tooltip="TypeScript">
                <Svg name="typescript" width={60} />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image} data-tooltip="Git">
                <Svg name="git" width={60} />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image} data-tooltip="Github">
                <Svg name="github" width={60} />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image} data-tooltip="Amazon Web Services">
                <Svg name="aws" width={60} />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image} data-tooltip="Netlify">
                <Svg name="netlify" width={60} />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.image} data-tooltip="VS Code">
                <Svg name="vscode" width={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
