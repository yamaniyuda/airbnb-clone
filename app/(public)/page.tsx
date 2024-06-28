import { Fragment } from "react";
import Content from "./components/content/content";
import Header from "@/components/organisms/header/header";
import ContentButton from "./components/content/content-button";
import ContentMaps from "./components/content/content-map";


export default async function Home({ searchParams }: any) {
  const urlSearch = new URLSearchParams(searchParams).get('show') ?? 'list'

  return (
    <Fragment>
      <Header />
      {
        urlSearch === 'list'
          ? <Content searchParams={searchParams} />
          : <ContentMaps />
      }
      <ContentButton searchParams={searchParams} />
    </Fragment>
  );
}
