import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

import { IPost, IPostContent } from '../../../models/post'

interface IProps {
  className?: string
  content: IPostContent
}

const PostTemplate: React.FC<IProps> = ({ className, content }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content.content }} />
    </div>
  )
}

export default PostTemplate
