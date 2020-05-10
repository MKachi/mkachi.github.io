import { useState } from 'react'
import db from '../../database.json'

const useDB = () => {
  const [ posts ] = useState(db.post.list)
  const [ contents ] = useState(db.post.contents)
  const [ tags ] = useState(db.tags)
  return { posts, contents, tags }
}

export default useDB
