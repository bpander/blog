import { BlogPosts } from '@/components/BlogPosts'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { loadPosts } from '@/util/loadPosts'


export default async function PagePage({ params }: { params: { number: string } }) {
  const posts = loadPosts(+params.number - 1)
  return (
    <DefaultLayout>
      <BlogPosts posts={posts} />
    </DefaultLayout>
  )
}
