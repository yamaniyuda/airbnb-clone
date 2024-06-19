import { Handler, ResponeGetBody } from "../_model";
import { NextResponse } from "next/server";
import { ProductCategory } from "./_model";
import data from "./_data.json";
import Helper from "../_helpers";



export const GET: Handler<ResponeGetBody<ProductCategory>> = async (request) => {
  let dataBuild = data
  let page = 1
  let per_page = data.length
  let total = data.length

  if (Helper.existMultiplyParamsInUrl(request.url!, ['per_page', 'page'])) {
    const searchPage = new URLSearchParams(new URL(request.url! as any).search)
    per_page = parseInt(searchPage.get('per_page')!)
    page = parseInt(searchPage.get('page')!)

    const startIndex = (page - 1) * per_page
    dataBuild = data.slice(startIndex, startIndex + per_page)
  }

  return NextResponse.json({
    per_page,
    total,
    page,
    data: dataBuild,
  })
};