import { BlogPosts } from '@/components/BlogPosts';
import { Header } from '@/components/Header';

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/posts`, {
    next: { tags: ['posts'] },
  })
  const { posts } = await response.json()

  return (
    <div>
      <Header />
      <BlogPosts posts={posts} />
    </div>
  );
}
