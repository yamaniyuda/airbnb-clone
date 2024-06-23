import { FC } from "react";
import styles from "./content.module.scss";
import dynamic from "next/dynamic";
import ProductCard from "@/components/melecules/product-card";
import querystring from "querystring";
import getConfig from 'next/config';
import { headers } from "next/headers";

const DUMMY_DATA: any = {
  title: "Open the Olympic Gaems",
  desc: "Hosted by Mathieu Lehanneur",
  status: "Sold Out",
  img: [
    "/contents/icons/icon-1.png",
    "/contents/icons/icon-1.png",
    "/contents/icons/icon-1.png",
    "/contents/icons/icon-1.png",
  ],
};

interface ContentProps {
  searchParams: any;
}

export default async function Content(params: ContentProps) {
  const hostName =  "https://" + headers().get('host');
  const data = await fetch(
    hostName + "/api/product?" + querystring.stringify(params.searchParams),
  ).then(res => res.json());


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
