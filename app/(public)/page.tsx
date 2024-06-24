import { Suspense } from "react";
import styles from "./_page.module.scss";
import Content from "./components/content/content";
import ProductCard from "@/components/melecules/product-card";

export const dynamic = 'force-dynamic'

export default async function Home({ searchParams }: any) {
  const res = await fetch(process.env.HOSTNAME + "/api/product?")
  const data = await res.json()

  return (
    <div className={styles.page}>
      <Content searchParams={searchParams} />
    </div>
  );
}
