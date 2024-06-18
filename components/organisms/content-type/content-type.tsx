"use client";

import { FC } from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import styles from './_content-type.module.scss'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import '@mantine/carousel/styles.css';
import { rem } from "@mantine/core";

const categoryImage: string[] = [
  'icons', 'castles', 'icons', 'castles', 'icons', 'castles', 'icons', 'castles', 'icons', 'castles', 'icons', 'castles', 'icons', 'castles', 'icons', 'castles', 'icons', 'castles', 'icons', 'castles',
]


const IndicatorRight = () => {
  return (
    <div className={styles.carause_type__right}>
      <div className={styles.carause_type__icon}> 
        <IconArrowRight />
      </div>
    </div>
  )
}


const IndicatorLeft = () => {
  return (
    <div className={styles.carause_type__left}>
      <div className={styles.carause_type__icon}> 
        <IconArrowLeft />
      </div>
    </div>
  )
}


const ContentType: FC = () => {

  const CategoryContentOptions = categoryImage.map((data, key) => {
    return (
      <Carousel.Slide key={key} className={styles.carauser_type__category}>
        <Image width={25} height={25} src={`/category-icons/${data}.png`} alt="" />
        <span>{data}</span>
      </Carousel.Slide>
    )
  })

  return (
    <Carousel
      height={50}
      className={styles.carauser_type__container}
      slideSize={'8%'}
      slidesToScroll={5}
      controlsOffset="xs" 
      align={'start'}
      nextControlIcon={<IndicatorRight />}
      previousControlIcon={<IndicatorLeft />}
      classNames={{ control: styles.control }}
    >
      {CategoryContentOptions}
    </Carousel>
  );
};

export default ContentType;
