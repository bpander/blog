import fs from 'fs'
import path from 'path'
 
export const GET = (
  req: Request,
  { params }: { params: { id: string } },
) => {
  const dir = path.resolve('./public', 'posts', params.id)
  const post = fs.readFileSync(dir, 'utf8');
  return Response.json({ post })
}
