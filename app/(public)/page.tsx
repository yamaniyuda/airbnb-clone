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
      <div
        className="grid
    grid-cols-4
    gap-5"
      >
        {JSON.stringify(data)}
        <h1>----</h1>
        {process.env.HOSTNAME}
        {/* {data?.data?.map((dt: any, key: number) => (
          <ProductCard
            title={dt.name}
            date={dt.date}
            desc={dt.front_desc}
            img={dt.images}
            price={dt.price}
            ranting={dt.ranting}
            status="false"
            key={key}
          />
        ))} */}
      </div>
    </div>
  );
}
