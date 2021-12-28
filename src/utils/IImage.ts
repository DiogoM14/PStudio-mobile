export interface IImage {
  title: string
  description: string
  category: string[]
  tags: string[]
  price: number
  year: number
  imageType: "real" | "digital"
  imageCDN: string
  likes: number
  dislikes: number
  author: string
}
