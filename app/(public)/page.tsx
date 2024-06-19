import styles from './_page.module.scss'
import Content from "./components/content/content";
import Inspiration from "@/components/organisms/inspiration/inspiration";

export default function Home() {
  return (
    <div>
      <div className={styles.page}>
        <Content />
      </div>
      <Inspiration/>
    </div>
  );
}
