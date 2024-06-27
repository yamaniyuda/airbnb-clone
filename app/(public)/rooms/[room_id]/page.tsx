import Header from "@/components/organisms/header/header";
import { Fragment } from "react";
import { ProductDetail } from "@/app/api/product/_mode";
import { Box, Text } from "@mantine/core";
import ContentHeadingImage from "./components/content-heading-image";
import styles from './_page.module.scss'
import ContentAdress from "./components/content-address";
import ContentProfile from "./components/content-profile";
import ContentPrimaryFacility from "./components/content-primary-facility";
import ContentDesc from "./components/content-desc";
import ContentOrder from "./components/content-order";
import { Metadata, ResolvingMetadata } from "next";
import ContentHost from "./components/content-host";


interface Props {
  params: { room_id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const id = params.room_id
 
  const data: ProductDetail = await fetch(process.env.HOSTNAME + "/api/product/" + params.room_id)
                      .then((res) => res.json());

  return {
    title: data.name,
  }
}



export default async function Rooms({ params } : Props) {
  const data: ProductDetail = await fetch(process.env.HOSTNAME + "/api/product/" + params.room_id)
                      .then((res) => res.json());

  
  return (
    <Fragment>
      <Header isDetail />
      <Box className={styles.page}>
        <Text className={styles.page__title}>{data.name}</Text>
        <ContentHeadingImage images={data?.images} />
        <Box className={styles.page__grid}>
          <Box className={styles.page__content_left}>
            <ContentAdress address={data.address} facilityDesc={data.facility_desc} ranting={data.ranting} />
            <ContentProfile user={data.user} />
            <ContentPrimaryFacility primerFacilities={data.primer_facilities} />
            <ContentDesc categoryName={data.product_type.name} desc={data.long_desc} />
            <ContentHost user={data.user} />
          </Box>
          <Box className={styles.page__content_right}>
            <ContentOrder price={data.price} />
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}