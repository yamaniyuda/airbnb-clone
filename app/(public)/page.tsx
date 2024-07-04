import Header from "@/components/organisms/header/header";
import { Fragment, Suspense } from "react";
import ContentMaps from "./components/content/content-map";
import ContentButton from "./components/content/content-button";
import Content from "./components/content/content";


export default async function Home({ searchParams }: any) {
  const urlSearch = new URLSearchParams(searchParams)
  const showContent = urlSearch.get('show') || 'list'
  const currentTabe = urlSearch.get('product-type') || 'icons'

  return (
    <Fragment>
      <Suspense>
        <Header/>
        {
          showContent === 'list'
            ? <Content searchParams={searchParams} />
            : <ContentMaps />
        }
        { currentTabe !== 'icons' && <ContentButton  searchParams={searchParams} /> }
      </Suspense>
    </Fragment>
  );
}
  