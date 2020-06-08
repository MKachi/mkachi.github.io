import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

import Layout, { Direction, Wrap } from '../../molecules/Layout'
import Tag from '../../atoms/Tag'
import { ITag } from '../../../models/tag'

interface IProps {
  className?: string
  tags: ITag[]
}

const TagList: React.FC<IProps> = ({ className, tags }) => {
  const classProps = classNames(className, styles['default'])
  return (
    <Layout className={classProps} direction={Direction.Row} wrap={Wrap.Wrap}>
      {tags.map(value => {
        return <Tag className={styles['tag']} value={value.name}>{`#${value.name} | ${value.count}`}</Tag>
      })}
    </Layout>
  )
}

export default TagList
