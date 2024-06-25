import { NextRequest, NextResponse } from "next/server";
import DataProduct from "../_data_product.json"
import DataFacility from '../_data_facility.json'
import DataProductType from '../../product-category/_data.json'

interface Params {
  product_id: string
}


export const GET = async (_: NextRequest, context: { params: Params }) => {
  const params = context.params.product_id
  let data = DataProduct.filter(data => data.id === params)[0]
  const primerFacilities = DataFacility.filter(dt => data?.primer_facilities_id.includes(dt.id))
  const cammonFacilities = DataFacility.filter(dt => data?.cammon_facilities_id.includes(dt.id))
  const productType = DataProductType.filter(dt => data?.product_type_id === dt.id)

  Object.assign(data, { primer_facilities: primerFacilities })
  Object.assign(data, { cammon_facilities: cammonFacilities })
  Object.assign(data, { product_type: productType })

  let { cammon_facilities_id, primer_facilities_id, product_type_id, ...finishData } = data

  return NextResponse.json(finishData)
};