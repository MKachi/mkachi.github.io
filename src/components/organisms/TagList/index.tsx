import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import Layout, { Direction, Wrap, Overflow } from '../../molecules/Layout'
import Tag from '../../atoms/Tag'
import { ITag } from '../../../models/tag'

interface IProps {
  className?: string
  tags: ITag[]
}

const TagList: React.FC<IProps> = ({ className, tags }) => {
  const classProps = classNames(className, styles['default'])
  return (
    <Layout className={classProps} direction={Direction.Row} overflow={Overflow.Auto}>
      {tags.map(value => {
        return <Tag className={styles['tag']}>{`#${value.name} | ${value.posts.length}`}</Tag>
      })}
    </Layout>
  )
}

export default TagList
