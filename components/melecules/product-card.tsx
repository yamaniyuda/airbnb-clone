"use client"

import { Carousel } from "@mantine/carousel";
import { Card, Group, Text } from "@mantine/core";
import Image from "next/image";
import { FC } from "react";
import styles from './product-card.module.scss'

interface ProductCardProps {
  title: string;
  desc: string;
  status: string;
  img: string[];
  date: string | undefined;
  price: string | undefined;
  ranting: number | undefined;
}

const ProductCard: FC<ProductCardProps> = ({ date, desc, status, img, price, ranting, title }) => {

  console.log(img)

  const imageCarauserSlider = img.map((data, key) => {
    return (
      <Carousel.Slide key={key}>
        <div>
          <Image
            src={'/contents/' + data}
            height={200}
            alt="Norway"
            width={200}
            className={styles.product_card__image}
          />
          <button className={styles.product_card__btn}>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                fill: "none",
                height: 14,
                width: 14,
                stroke: "currentcolor",
                strokeWidth: 3.42857,
                overflow: "visible",
              }}
            >
              <path
                d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289"
                fill="none"
              />
            </svg>
          </button>
          <button className={styles.product_card__btn_live}>Live</button>
        </div>
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
            root: styles.root,
            indicator: styles.indicator
        }}>
          {imageCarauserSlider}
        </Carousel>
      </Card.Section>

      <Card.Section>
        <Text  fw={500}>{title}</Text>
        <Text size="sm" c="dimmed">{desc}</Text>
        <Text  fw={500}>{status}</Text>
      </Card.Section>
    </Card>
  );
};


export default ProductCard;
