"use client";

import { FC } from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import styles from './_content-type.module.scss'
import '@mantine/carousel/styles.css';

const categoryImage: string[] = [
  'icons', 'castles', 'icons', 'castles', 'icons', 'castles', 'icons', 'castles', 'icons', 'castles', 'icons', 'castles', 'icons', 'castles', 'icons', 'castles', 'icons', 'castles', 'icons', 'castles',
]

const ContentType: FC = () => {

  const CategoryContentOptions = categoryImage.map((data, key) => {
    return (
      <Carousel.Slide key={key}>
        <Image width={20} height={20} src={`/category-icons/${data}.png`} alt="" />
        <span>{data}</span>
      </Carousel.Slide>
    )
  })

  return (
    <Carousel
      height={50}
      className={`${styles.carauser_type__container} ${styles.control_is_inactive}`}
      slideSize={'10%'}
      classNames={{
        control: styles.control
       }}
      align={'start'}
    >
      {CategoryContentOptions}
    </Carousel>
  );
};

export default ContentType;
