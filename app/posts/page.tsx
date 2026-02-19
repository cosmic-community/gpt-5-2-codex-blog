import PostGrid from '@/components/PostGrid'
import { getPosts } from '@/lib/cosmic'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold">All Posts</h1>
      <p className="mt-3 text-slate-600">
        Explore every story, guide, and thought piece from our editorial team.
      </p>
      <PostGrid posts={posts} />
    </section>
  )
}