import { GetGlobalParams } from '../_model'

export interface ProductCategory {
  id: string
  slug: string
  name: string
  image: string
}

export interface GetParams extends GetGlobalParams{}