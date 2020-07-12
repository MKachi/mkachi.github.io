import React, { useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  title: string
  url: string
  identifier: string
}

const Comment: React.FC<IProps> = ({ className, title, url, identifier }) => {
  useEffect(() => {
    const disqusInfo = document.getElementById('disqus_info')
    if (disqusInfo) {
      disqusInfo.remove()
    }
    const info = document.createElement('script')
    info.id = 'disqus_info'
    info.type = 'text/javascript'
    info.async = true
    info.text = `
    var disqus_config = function() {
      this.page.title = '${title}'
      this.page.url = '${url}'
      this.page.identifier = '${identifier}'
    }`
    document.body.appendChild(info)

    const disqusEmbed = document.getElementById('disqus_embed')
    if (!disqusEmbed) {
      const embed = document.createElement('script')
      embed.id = 'disqus_embed'
      embed.type = 'text/javascript'
      embed.async = true
      embed.src = 'https://mkachi.disqus.com/embed.js'
      embed.setAttribute('data-timestamp', Number(new Date()).toString())
      document.body.appendChild(embed)
    } else {
      window.DISQUS.reset({
        reload: true,
        config: disqus_config,
      })
    }
    return () => {
      const disqusInfo = document.getElementById('disqus_info')
      if (disqusInfo) {
        disqusInfo.remove()
      }

      const disqusEmbed = document.getElementById('disqus_embed')
      if (disqusEmbed) {
        disqusEmbed.remove()
      }
    }
  }, [])
  return <div id={'disqus_thread'} />
}

export default Comment
