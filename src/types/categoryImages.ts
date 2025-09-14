export interface CategoryImages {
  hero: string[]
  services: string[]
  about: string[]
  industry: string[]
  contact: string[]
}

export interface ProductImages {
  [key: string]: string
}

export interface Images {
  hero: string[]
  services: string[]
  about: string[]
  industry: string[]
  contact: string[]
  products: ProductImages
}