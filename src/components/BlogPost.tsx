import Markdown from 'markdown-to-jsx'
import Image, { ImageProps, getImageProps } from 'next/image'
import { Post } from '@/util/loadPosts'
import Link from 'next/link'

const LinkedImg = (props: ImageProps) => {
  const imgProps = getImageProps(props)
  return (
    <a href={imgProps.props.src} target="_blank" className="image">
      <Image alt="" {...imgProps.props} />
    </a>
  )
}

export const BlogPost = ({ post }: { post: Post }) => {
  return (
    <div className="py-6 p-4 sm:p-6 bg-white">
      {post.latest && (
        <span className="float-right mt-[3px] ml-2 text-green-800 border border-green-800 text-sm py-0.5 px-2 rounded-md">
          Latest
        </span>
      )}
      <span className="text-2xl leading-tight text-gray-400 font-light">
        {`#${post.index + 1} `}
      </span>
      <h2 className="text-2xl leading-tight inline font-bold">
        <Link href={`/posts/${post.id}`}>
          {post.title || 'Untitled'}
        </Link>
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
  )
}