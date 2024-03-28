import { BlogPosts } from '@/components/BlogPosts'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { loadPosts } from '@/util/loadPosts'

const posts = loadPosts()

export default async function Home() {
  return (
    <DefaultLayout>
      <BlogPosts posts={posts} />
    </DefaultLayout>
  )
}
