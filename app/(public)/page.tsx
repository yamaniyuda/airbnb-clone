import { Fragment, Suspense } from "react";
import Content from "./components/content/content";
import Header from "@/components/organisms/header/header";
import ContentButton from "./components/content/content-button";
import ContentMaps from "./components/content/content-map";


export default async function Home({ searchParams }: any) {
  const urlSearch = new URLSearchParams(searchParams)
  const showContent = urlSearch.get('show') || 'list'
  const currentTabe = urlSearch.get('product-type') || 'icons'

  return (
    <Fragment>
      <Suspense fallback={<h1>loadin</h1>}>
        <Header/>
        {
          showContent === 'list'
            ? <Content searchParams={searchParams} />
            : <ContentMaps />
        }
        { currentTabe !== 'icons' && <ContentButton searchParams={searchParams} /> }
      </Suspense>
    </Fragment>
  );
}
