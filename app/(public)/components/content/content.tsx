import { FC } from "react";
import styles from "./content.module.scss";
import dynamic from "next/dynamic";
import ProductCard from "@/components/melecules/product-card";

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

const Content: FC = () => {
  const CardProducts = Array(20)
    .fill(null)
    .map((_, key) => {
      return <ProductCard {...DUMMY_DATA} key={`product-${key}`} />;
    });

  return <div className={styles.content}>{CardProducts}</div>;
};

export default Content;
