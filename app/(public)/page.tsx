import { Fragment, Suspense } from "react";
import Content from "./components/content/content";
import Header from "@/components/organisms/header/header";


export const dynamic = 'force-dynamic'


export default async function Home({ searchParams }: any) {
  return (
    <Fragment>
      <Header />
      <Content searchParams={searchParams} />
    </Fragment>
  );
}
