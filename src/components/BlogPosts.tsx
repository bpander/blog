import { Post } from '@/util/loadPosts'
import { BlogPost } from './BlogPost'

interface BlogPostsProps {
  posts: Post[]
}

export const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <>
      {posts?.map((post, i) => (
        <div key={i} className="my-8">
          <BlogPost post={post} />
        </div>
      ))}
    </>
  )
}
