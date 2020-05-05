'use strict'

const config = require('./config')

const markdown = require('markdown-it')
const fs = require('fs')
const util = require('util')

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

const loadPosts = async (postPath) => {
  const list = []
  const posts = {}

  const md = markdown({
    html: true,
    linkify: true,
    typographer: true
  })
  const markdowns = await getFiles(postPath)
  for (let i = 0; i < markdowns.length; ++i) {
    const post = await parsePost(markdowns[i])
    const key = `${post.date}-${post.title.replace(/ /gi, '-')}`
    const content = md.render(post.content)
    posts[key] = {
      date: post.date,
      title: post.title,
      tags: post.tags,
      content: content
    }
    list.push({
      key: key,
      date: post.date,
      title: post.title,
      tags: post.tags
    })
  }
  list.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateA < dateB ? 1 : -1
  })
  return {
    list,
    posts
  }
}

module.exports = async () => {
  const postTable = await loadPosts(config.posts)
  const json = {
    postTable: postTable
  }
  await writeFile(config.src + '/database.json', JSON.stringify(json))
}
