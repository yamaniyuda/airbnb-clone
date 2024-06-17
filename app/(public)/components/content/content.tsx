import ProductCard from "@/components/melecules/product-card";
import { FC } from "react";
import styles from "./content.module.scss"

const DUMMY_DATA: any = {
  title: "Open the Olympic Gaems",
  desc: "Hosted by Mathieu Lehanneur",
  img: ["/contents/icons/icon-1.png", "/contents/icons/icon-1.png", "/contents/icons/icon-1.png","/contents/icons/icon-1.png"],
}


const CardProducts = Array(20).fill(null).map((_, key) => {
  return (
    <ProductCard key={key} {...DUMMY_DATA} />
  )
})



const Content: FC = () => {

  return (
    <div className={styles.content}>
      {CardProducts}
    </div>
  )
}

export default Content