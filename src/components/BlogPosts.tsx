import { Post } from '@/app/api/posts/route'

interface BlogPostsProps {
  posts: Post[]
}

export const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <>
      {posts?.map((post, i) => (
        <div key={i}>{post.contents}</div>
      ))}
    </>
  )
}
