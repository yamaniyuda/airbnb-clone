"use server"

import ProductCard from "@/components/melecules/product-card";
import { FC } from "react";
import styles from "./content.module.scss"

const DUMMY_DATA: any = {
  title: "Open the Olympic Gaems",
  desc: "Hosted by Mathieu Lehanneur",
  img: ["/contents/icons/icon-1.png", "/contents/icons/icon-1.png", "/contents/icons/icon-1.png","/contents/icons/icon-1.png"],
}


const Content: FC = () => {

  const CardProducts = Array(20).fill(null).map((_, key) => {
    console.log(key)
    return (
      <ProductCard {...DUMMY_DATA} key={key} />
    )
  })
  

  return (
    <div className={styles.content}>
      {CardProducts}
    </div>
  )
}

export default Content