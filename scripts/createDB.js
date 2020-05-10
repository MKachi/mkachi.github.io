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
      const keyA = a.key
      const keyB = b.key;
      [contents[keyA].index, contents[keyB].index] = [contents[keyB].index, contents[keyA].index]

      return 1
    } else if (dateA > dateB) {
      const keyA = a.key
      const keyB = b.key;
      [contents[keyA].index, contents[keyB].index] = [contents[keyB].index, contents[keyA].index]
      return -1
    }
    return 0
  })

  for (let i = 0; i < list.length; ++i) {
    contents[list[i].key].index = i
    console.log('-----------------------')
    console.log(list[i])
    console.log(contents[list[i].key])
  }

  return {
    list,
    contents,
  }
}

module.exports = async () => {
  const post = await loadPosts(config.posts)
  const json = {
    post,
  }
  await writeFile(config.src + '/database.json', JSON.stringify(json))
}
