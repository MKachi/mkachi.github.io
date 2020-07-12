import { useState } from 'react'
import db from '../../database.json'
import { IPost } from '../../models/post'
import { ITag } from '../../models/tag'

const useDB = () => {
  const [posts] = useState<IPost[]>(db.post.list)
  const [contents] = useState(db.post.contents)
  const [tags] = useState<ITag[]>(db.tags)
  return { posts, contents, tags }
}

export default useDB
