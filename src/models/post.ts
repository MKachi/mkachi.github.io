export interface IPost {
  key: string
  date: string
  time: string
  title: string
  tags: string[]
}

export interface IPostContent {
  index: number
  content: string
}
