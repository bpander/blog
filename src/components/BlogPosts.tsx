import { Post } from '@/util/loadPosts'
import Markdown from 'markdown-to-jsx'
import Image, { ImageProps, getImageProps } from 'next/image'

interface BlogPostsProps {
  posts: Post[]
}

const LinkedImg = (props: ImageProps) => {
  const imgProps = getImageProps(props)
  return (
    <a href={imgProps.props.src} target="_blank" className="image">
      <Image alt="" {...imgProps.props} />
    </a>
  )
}

export const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <div className="-mt-6 pt-4">
      {posts?.map((post, i) => (
        <div className="py-6 p-4 sm:p-6 bg-white my-8" key={i}>
          <h2 className="font-bold text-2xl leading-tight">
            <span className="text-gray-400 font-light">
              {`#${post.index + 1} `}
            </span>
            {post.title || 'Untitled'}
          </h2>
          <div className="text-gray-400">
            {post.date}
          </div>
          <div className="mb-4" />
          <div className="post">
            <Markdown
              options={{
                overrides: { img: LinkedImg },
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
