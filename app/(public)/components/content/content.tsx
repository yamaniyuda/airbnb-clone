import dynamic from "next/dynamic";
import styles from "./_content.module.scss";
import querystring from "querystring";

interface ContentProps {
  searchParams: any;
}


const ProductCard = dynamic(() => import("@/components/melecules/product-card"), { ssr: false })


export default async function Content(params: ContentProps) {

  const data = await fetch(process.env.HOSTNAME + "/api/product?" + (params.searchParams ? querystring.stringify(params.searchParams) : 'product-type=icons'), { cache: 'no-store' })
                      .then((res) => res?.json())


  return (
    <div className={styles.page}>
      <div className={styles.content}>  
        {data?.data?.map((dt: any, key: number) => (
          <ProductCard
            id={dt.id}
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
    </div>
  );
}
