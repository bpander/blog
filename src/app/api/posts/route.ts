import fs from 'fs'
import path from 'path'

export interface Post {
  contents: string
}

const perPage = +(process.env.POSTS_PER_PAGE || 10)

export const GET = () => {
  const dir = path.resolve('./public', 'posts')
  const files = fs.readdirSync(dir)
  const posts: Post[] = files.slice(perPage * -1).reverse().map((id) => {
    const contents = fs.readFileSync(path.resolve(dir, id), 'utf-8')
    return { contents }
  })
  return Response.json({ posts })
}
