import { Fragment, Suspense } from "react";
import Content from "./components/content/content";
import Header from "@/components/organisms/header/header";
import querystring from "querystring";


export default async function Home({ searchParams }: any) {
  const data = await fetch(process.env.HOSTNAME + "/api/product?" + querystring.stringify(searchParams), { cache: 'no-store' })
                      .then((res) => res?.json())
                      .catch(_ => { return {} })

  return (
    <Fragment>
      {JSON.stringify(data)}
      {process.env.HOSTNAME}
    </Fragment>
  );
}
