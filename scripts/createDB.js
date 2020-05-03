'use struct'
const fs = require('fs')
const util = require('util')
const markdown = require('markdown-it')

const config = require('./config')

const readDir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const stat = util.promisify(fs.stat)

const getFiles = async (searchPath) => {
  const result = []
  const searchFiles = async (path) => {
    const items = await readDir(path)
    for (let i = 0; i < items.length; ++i) {
      const subPath = path + '/' + items[i]
      const stats = await stat(subPath)
      if (stats.isDirectory()) {
        await searchFiles(subPath)
      } else {
        result.push(subPath)
      }
    }
  }
  await searchFiles(searchPath)
  return result
}

const parsePost = async (filePath) => {
  const result = {
    date: '',
    time: '',
    tags: null,
    title: '',
    content: ''
  }
  const data = await readFile(filePath, 'utf-8')
  const lines = data.split('\n')
  let reader = ''
  let content = false
  for (let i = 1; i < lines.length; ++i) {

    if (lines[i] === '---') {
      content = true
      continue
    }

    if (content) {
      reader += lines[i]
    } else {
      const endIndex = lines[i].indexOf(':')
      if (endIndex < 0) {
        continue
      }
      const key = lines[i].substring(0, endIndex).trim()
      let value = lines[i].substring(endIndex + 1).trim()
      if (key === 'tags') {
        const labels = value.substring(1, value.length - 1).trim().split(',')
        value = []
        for (let j = 0; j < labels.length; ++j) {
          value.push(labels[j].trim())
        }
      }
      result[key] = value
    }
  }
  result.content = reader
  return result
}

const loadPosts = async (path) => {
  const result = []
  const md = markdown({
    html: true,
    linkify: true,
    typographer: true
  })
  const posts = await getFiles(path)
  for (let i = 0; i < posts.length; ++i) {
    const post = await parsePost(posts[i])
    const path = '/' + post.date.replace(/-/gi, '/') + '/' + post.title.replace(/ /gi, '-')
    const content = md.render(post.content)
    result.push({
      path: path,
      title: post.title,
      date: post.date,
      time: post.time,
      tags: post.tags,
      content: content
    })
  }
  return result
}

module.exports = async () => {
  const posts = await loadPosts(config.posts)
  const json = {
    posts: posts
  }
  await writeFile(config.src + '/database.json', JSON.stringify(json))
}
