import { useState } from 'react'
import db from '../../database.json'

const useDB = () => {
  const [ posts ] = useState(db.post.list)
  const [ contents ] = useState(db.post.contents)
  return { posts, contents }
}

export default useDB
