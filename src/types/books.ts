type data = {
  items: dataBook[]
  kind: string
  totalItems: number
}

type dataBook = {
  id: string
  selfLink: string
  volumeInfo: book
}

type book = {
  authors: string[]
  publishedDate: string
  title: string
  subTitle?: string
  description?: string
  pageCount?: number
  imageLinks?: links
  publisher: string
  categories: string[]
}

type links = {
  smallThumbnail: string
  thumbnail: string
}

export type { data, dataBook, book }
