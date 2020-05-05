import { useState } from 'react'
import db from '../../database.json'

function useDB() {
  const [postList] = useState(db.postTable.list)
  const [posts] = useState(db.postTable.posts)
  return { postList, posts }
}

export default useDB
