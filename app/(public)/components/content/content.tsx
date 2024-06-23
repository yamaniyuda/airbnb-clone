import styles from "./content.module.scss";
import ProductCard from "@/components/melecules/product-card";
// import querystring from "querystring";

interface ContentProps {
  searchParams: any;
}

export default async function Content(params: ContentProps) {
  const data = await fetch(
    process.env.HOSTNAME +
      "/api/product?" ,
  ).then((res) => res.json());

  return (
    <div className={styles.content}>
      {data.data.map((dt: any, key: number) => (
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
      ))}
    </div>
  );
}
