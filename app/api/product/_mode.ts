export interface Product {
  id: string
  product_type_slug: string
  name: string
  price: number
  front_desc: string
  ranting: number | null
  date: string
  images: string[]
}

export interface ProductDetail extends Product {
  user_id: string
  long_desc: string
  facility_desc: string[]
  primer_facilities: Facility[]
}


export interface Facility {
  id: string
  name: string
  desc: string | null
  icon: string
}