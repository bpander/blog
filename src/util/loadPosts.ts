import fs from 'fs'
import path from 'path'
import { parse } from 'yaml'

export interface Post {
  index: number
  title: string | null
  date: string | null
  contents: string
}

const perPage = +(process.env.POSTS_PER_PAGE || 5)

export const loadPosts = () => {
  const dir = path.resolve('./public', 'posts')
  const files = fs.readdirSync(dir).sort()
  const posts: Post[] = files.slice(perPage * -1).reverse().map((id) => {
    const contents = fs.readFileSync(path.resolve(dir, id), 'utf-8')
    const metadataYaml = contents.match(/(?<=---\s+).*?(?=\s+---)/s)?.[0]
    const metadata = parse(metadataYaml || '')
    return {
      index: files.indexOf(id),
      title: metadata?.Title || null,
      date: metadata?.Date || null,
      contents,
    }
  })
  return posts
}
