import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

import { IPost } from '../../../models/post'

interface IProps {
  className?: string
  post: IPost
}

const PostTemplate: React.FC<IProps> = ({ className, post }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

export default PostTemplate
