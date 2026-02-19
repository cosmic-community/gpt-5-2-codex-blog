import PostCard from '@/components/PostCard'
import type { Post } from '@/types'

export default function PostGrid({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) {
    return <p className="mt-6 text-slate-500">No posts yet.</p>
  }

  return (
    <div className="mt-8 grid gap-8 md:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}