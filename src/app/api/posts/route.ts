import fs from 'fs'
import path from 'path'
 
export const GET = () => {
  const dir = path.resolve('./public', 'posts')
  const posts = fs.readdirSync(dir);
  return Response.json({ posts })
}
