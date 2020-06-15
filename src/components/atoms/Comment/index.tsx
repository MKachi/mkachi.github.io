import React, { useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  url: string
  identifier: string
}

const Comment: React.FC<IProps> = ({ className, url, identifier }) => {
  useEffect(() => {
    const disqusElement = document.getElementById('disqus_script')
    if (!disqusElement) {
      var config = function(this: { page: { url: string; identifier: string } }) {
        this.page.url = url
        this.page.identifier = identifier
      }

      const script = document.createElement('script')
      script.src = 'https://mkachi.disqus.com/embed.js'
      script.setAttribute('data-timestamp', new Date().toString())
      document.body.appendChild(script)
    } else {
      window.DISQUS.reset({
        reload: true,
        config: config
      })
    }
  }, [])
  return <div id={'disqus_thread'} />
}

export default Comment
