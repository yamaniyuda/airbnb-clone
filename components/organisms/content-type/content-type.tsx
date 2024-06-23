"use client";

import { FC, useCallback, useMemo } from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import styles from "./_content-type.module.scss";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import useSWR from "swr";
import { Skeleton } from "@mantine/core";
import { ProductCategory } from "@/app/api/product-category/_model";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import "@mantine/carousel/styles.css";

const IndicatorRight = () => (
  <div className={styles.carause_type__right}>
    <div className={styles.carause_type__icon}>
      <IconArrowRight />
    </div>
  </div>
);

const IndicatorLeft = () => (
  <div className={styles.carause_type__left}>
    <div className={styles.carause_type__icon}>
      <IconArrowLeft />
    </div>
  </div>
);

const LoadingComponent: FC = () => (
  <div className="mx-3 flex flex-col justify-center items-center">
    <Skeleton height={30} circle className="mb-2" />
    <Skeleton height={10} radius="xl" width={50} />
  </div>
);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ContentType: FC = () => {
  const { data, isLoading } = useSWR("/api/product-category", fetcher);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );


  const selectedProductType = useMemo(() => {
    return searchParams.get("product-type")
  }, [searchParams])


  const onClickHandler = (slug: string) => {
    router.replace(pathname + "?" + createQueryString("product-type", slug), {scroll: false});
  };


  return (
    <Carousel
      height={50}
      className={styles.carauser_type__container}
      slideSize="max-content"
      slidesToScroll={5}
      controlsOffset="xl"
      align="start"
      nextControlIcon={<IndicatorRight />}
      previousControlIcon={<IndicatorLeft />}
      classNames={{ control: styles.control }}
    >
      {isLoading
        ? new Array(20).fill(0).map((_, key) => <LoadingComponent key={key} />)
        : data?.data?.map((dt: ProductCategory, key: number) => (
            <Carousel.Slide
              key={key}
              onClick={() => onClickHandler(dt.slug)}
              className={`${styles.carauser_type__category} ${
                dt.slug === selectedProductType ? styles.carause_type__active : ""
              }`}
            >
              <Image
                width={25}
                height={25}
                src={`/category-icons/${dt.image}`}
                alt={dt.name}
              />
              <span>{dt.name}</span>
            </Carousel.Slide>
          ))}
    </Carousel>
  );
};

export default ContentType;
