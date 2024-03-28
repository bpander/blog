import fs from 'fs'
import path from 'path'
import { parse } from 'yaml'

export interface Post {
  id: string
  index: number
  latest: boolean
  title: string | null
  date: string | null
  contents: string
}

const perPage = +(process.env.POSTS_PER_PAGE || 5)
const dir = path.resolve('./public', 'posts-raw')

export const getAllPostIds = () => {
  return fs.readdirSync(dir).sort()
}

export const loadPost = (id: string): Post => {
  const contents = fs.readFileSync(path.resolve(dir, id), 'utf-8')
  const metadataYaml = contents.match(/(?<=---\s+).*?(?=\s+---)/s)?.[0]
  const metadata = parse(metadataYaml || '')
  const allIds = getAllPostIds()
  const index = allIds.indexOf(id)
  return {
    id,
    index,
    latest: index === allIds.length - 1,
    title: metadata?.Title || null,
    date: metadata?.Date || null,
    contents,
  }
}

export const loadPosts = (page = 0): Post[] => {
  const allIds = getAllPostIds()
  return allIds.reverse().slice(page * perPage, perPage).map(loadPost)
}
