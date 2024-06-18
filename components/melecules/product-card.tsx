"use client"

import { Carousel } from "@mantine/carousel";
import { Card, Group, Text } from "@mantine/core";
import Image from "next/image";
import { FC } from "react";
import styles from './product-card.module.scss'

interface ProductCardProps {
  title: string;
  desc: string;
  img: string[];
  date: string | undefined;
  price: string | undefined;
  ranting: number | undefined;
}

const ProductCard: FC<ProductCardProps> = ({ date, desc, img, price, ranting, title }) => {


  const imageCarauserSlider = img.map((data, key) => {
    return (
      <Carousel.Slide>
        <Image
          src={data}
          height={200}
          alt="Norway"
          width={200}
          className={styles.product_card__image}
        />
      </Carousel.Slide>
    )
  })


  return (
    <Card>
      <Card.Section className={styles.product_card__image__container}>
        <Carousel
          withIndicators
          classNames={{ 
            control: styles.control,
        }}>
          {imageCarauserSlider}
        </Carousel>
      </Card.Section>

      <Card.Section>
        <Text  fw={500}>{title}</Text>
        <Text size="sm" c="dimmed">{desc}</Text>
      </Card.Section>
    </Card>
  );
};


export default ProductCard;
