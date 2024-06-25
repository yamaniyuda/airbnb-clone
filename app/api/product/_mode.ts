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
  address: string | null
  facility_desc: string[]
  primer_facilities: Facility[]
  cammon_facilities: Facility[]
}


export interface Facility {
  id: string
  name: string
  desc: string | null
  icon: string
}

export interface User {
  id: string
  name: string
  start_year: string
  profile: string
  desc: string
}