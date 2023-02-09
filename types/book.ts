interface book {
  id: string
  selfLink: string
  volumeInfo: bookInf
}

interface bookInf {
  title: string
  authors: string[]
  description?: string
  publishedDate?: string
  imageLinks?: links
}

interface links {
  thumbnail: string
}

export type { book, bookInf }
