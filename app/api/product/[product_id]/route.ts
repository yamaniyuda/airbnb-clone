import { Handler, ResponeGetBody } from "../../_model";
import { NextRequest, NextResponse } from "next/server";
import { Product } from "../_mode";
import DataProduct from "../_data_product.json"
import DataProductType from '../_data_facility.json'


interface Params {
  product_id: string
}



export const GET = async (_: NextRequest, context: { params: Params }) => {
  const params = context.params.product_id
  let data = DataProduct.filter(data => data.id === params)[0]
  const primerFacilities = DataProductType.filter(dt => data.primer_facilities_id.includes(dt.id))
  const cammonFacilities = DataProductType.filter(dt => data.cammon_facilities_id.includes(dt.id))

  Object.assign(data, { primer_facilities: primerFacilities })
  Object.assign(data, { cammon_facilities: cammonFacilities })

  let { cammon_facilities_id, primer_facilities_id, product_type_id, ...finishData } = data

  return NextResponse.json(finishData)
};