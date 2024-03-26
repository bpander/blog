import { Post } from '@/util/loadPosts'
import Markdown from 'markdown-to-jsx'
import Image, { ImageProps } from 'next/image'

interface BlogPostsProps {
  posts: Post[]
}

// eslint-disable-next-line jsx-a11y/alt-text
const MyImg = (props: ImageProps) => <Image {...props} />

export const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <div className="-mt-6 pt-4">
      {posts?.map((post, i) => (
        <div className="p-6 bg-white my-8" key={i}>
          <h2 className="font-bold text-2xl">
            {post.title || 'Untitled'}
          </h2>
          <div className="text-gray-400">
            {post.date}
          </div>
          <div className="mb-4" />
          <div className="post">
            <Markdown
              options={{
                overrides: { img: MyImg },
              }}
            >
              {post.contents}
            </Markdown>
          </div>
        </div>
      ))}
    </div>
  )
}
