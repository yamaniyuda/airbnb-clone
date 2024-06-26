import { Fragment, Suspense } from "react";
import Content from "./components/content/content";
import Header from "@/components/organisms/header/header";
import { GetServerSideProps } from "next";
import { Product } from "../api/product/_mode";





export default async function Home({ searchParams }: any) {
  return (
    <Fragment>
      <Header />
      <Content searchParams={searchParams} />
    </Fragment>
  );
}
