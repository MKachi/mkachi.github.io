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
    time: '',
    title: '',
    tags: null,
    content: '',
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
  const contents = {}

  const md = markdown({
    html: true,
    linkify: true,
    typographer: true,
  })
  const markdowns = await getFiles(postPath)
  for (let i = 0; i < markdowns.length; ++i) {
    const post = await parsePost(markdowns[i])
    const key = `${post.date}-${post.title.replace(/ /gi, '-')}`
    const content = md.render(post.content)
    list.push({
      key,
      date: post.date,
      time: post.time,
      title: post.title,
      tags: post.tags,
    })
    contents[key] = {
      index: i,
      content
    }
  }
  list.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`).getTime()
    const dateB = new Date(`${b.date} ${b.time}`).getTime()
    if (dateA < dateB) {
      return 1
    } else if (dateA > dateB) {
      return -1
    }
    return 0
  })

  // indexing
  for (let i = 0; i < list.length; ++i) {
    contents[list[i].key].index = i
  }

  return {
    list,
    contents,
  }
}

const parseTags = async (list) => {
  const result = {}
  for (let i = 0; i < list.length; ++i) {
    const tags = list[i].tags
    for (let j = 0; j < tags.length; ++j) {
      if (result[tags[j]] === undefined || result[tags[j]] === null) {
        result[tags[j]] = []
      }
      result[tags[j]].push(i)
    }
  }
  return result
}

module.exports = async () => {
  const post = await loadPosts(config.posts)
  const tags = await parseTags(post.list)
  const json = {
    post,
    tags
  }
  await writeFile(config.src + '/database.json', JSON.stringify(json))
}
