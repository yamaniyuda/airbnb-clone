import styles from "./_page.module.scss";
import Content from "./components/content/content";

export default function Home() {
  return (
    <div className={styles.page}>
      <Content />
    </div>
  );
}
