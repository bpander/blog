import { BlogPost } from '@/components/BlogPost';
import { LeftIcon } from '@/icons/LeftIcon';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { loadPost } from '@/util/loadPosts';
import Link from 'next/link';

export default function PostPage ({ params }: { params: { id: string } }) {
  const post = loadPost(`${params.id}.md`)

  return (
    <DefaultLayout>
      <div className="my-8">
        <div className="mb-2">
          <Link href="/">
            <span className="flex">
              <LeftIcon />
              All posts
            </span>
          </Link>
        </div>
        <BlogPost post={post} />
      </div>
    </DefaultLayout>
  )
}
