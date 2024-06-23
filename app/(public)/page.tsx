import { Suspense } from "react";
import styles from "./_page.module.scss";
import Content from "./components/content/content";


export default async function Home({ searchParams }:any) {

  return (
    <div className={styles.page}>
      <Suspense>
        <Content searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
