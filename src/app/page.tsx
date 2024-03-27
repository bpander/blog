import { BlogPosts } from '@/components/BlogPosts'
import { loadPosts } from '@/util/loadPosts'
import Link from 'next/link'

const posts = loadPosts()

export default async function Home() {
  return (
    <div className="max-w-screen-md mx-auto mt-6">
      <h1 className="pl-4 md:pl-0">
        <Link href="/" className="font-bold text-xl">
          Blog
        </Link>
        <span className="border-r border-neutral-300 mx-2" />
        <span className="text-neutral-500">delabrad</span>
      </h1>
      <BlogPosts posts={posts} />
    </div>
  )
}
