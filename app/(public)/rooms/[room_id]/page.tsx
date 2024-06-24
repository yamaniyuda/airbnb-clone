import Header from "@/components/organisms/header/header";
import { Fragment } from "react";
import { ProductDetail } from "@/app/api/product/_mode";
import { Text } from "@mantine/core";
import ContentHeadingImage from "./components/content-heading-image";
import styles from './_page.module.scss'


interface RoomsProps {
  params: { room_id: string }
}


export default async function Rooms({ params } : RoomsProps) {
  const data: ProductDetail = await fetch(process.env.HOSTNAME + "/api/product/" + params.room_id)
                      .then((res) => res.json());

  
  return (
    <Fragment>
      <Header isDetail />
      <div className={styles.page}>
        <Text>{data.name}</Text>
        <ContentHeadingImage images={data?.images} />
      </div>
    </Fragment>
  )
}