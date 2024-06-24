import { Handler, ResponeGetBody } from "../_model";
import { NextRequest, NextResponse } from "next/server";
import Helper from "../_helpers";
import { Product } from "./_mode";
import DataProduct from "./_data_product.json"
import DataProductType from '../product-category/_data.json'



export const GET = async (request: NextRequest, context: any) => {
  console.log(context)
  const searchPage = new URLSearchParams(new URL(request.url! as any).search)
  let page = 1
  let per_page = DataProduct.length
  let total = DataProduct.length

  let dataBuild = DataProduct.map((dt) => {
    const productSlug = DataProductType.filter(data => data.id === dt.product_type_id)[0].slug

    return {
      id: dt.id,
      product_type_slug: productSlug,
      name: dt.name,
      price: dt.price,
      front_desc: dt.front_desc,
      ranting: dt.ranting,
      date: dt.date,
      images: dt.images
    }
  })


  if (Helper.existMultiplyParamsInUrl(request.url!, ['product-type'])) {
    const productTypeSlug = searchPage.get('product-type')
    dataBuild = dataBuild.filter(dt => dt.product_type_slug === productTypeSlug)
  }


  if (Helper.existMultiplyParamsInUrl(request.url!, ['per_page', 'page'])) {
    per_page = parseInt(searchPage.get('per_page')!)
    page = parseInt(searchPage.get('page')!)

    const startIndex = (page - 1) * per_page
    dataBuild = dataBuild.slice(startIndex, startIndex + per_page)
  }

  return NextResponse.json({
    per_page,
    total,
    page,
    data: dataBuild,
  })
};