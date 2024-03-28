import { BlogPosts } from '@/components/BlogPosts'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { getAllPostIds, loadPosts } from '@/util/loadPosts'

const perPage = +(process.env.POSTS_PER_PAGE || 5)

export const generateStaticParams = () => {
  const pages = Math.ceil(getAllPostIds().length / perPage)
  return Array.from(Array(pages)).map((_, i) => ({ number: `${i + 1}` }))
}

export default async function PagePage({ params }: { params: { number: string } }) {
  const posts = loadPosts(+params.number - 1)
  return (
    <DefaultLayout>
      <BlogPosts posts={posts} />
    </DefaultLayout>
  )
}
