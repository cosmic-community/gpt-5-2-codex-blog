import Link from 'next/link'
import type { Post } from '@/types'

function formatDate(dateString?: string): string {
  if (!dateString) return 'Recently'
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return 'Recently'
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)
}

export default function PostCard({ post }: { post: Post }) {
  const imageUrl = post.metadata?.featured_image?.imgix_url
  const author = post.metadata?.author
  const category = post.metadata?.category

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <Link href={`/posts/${post.slug}`} className="block">
        {imageUrl ? (
          <img
            src={`${imageUrl}?w=1200&h=800&fit=crop&auto=format,compress`}
            alt={post.title}
            width={600}
            height={400}
            className="h-56 w-full object-cover"
          />
        ) : (
          <div className="flex h-56 items-center justify-center bg-slate-100 text-slate-400">
            No image
          </div>
        )}
      </Link>
      <div className="space-y-3 p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <span>{formatDate(post.created_at)}</span>
          {category?.title ? <span>{category.title}</span> : null}
        </div>
        <Link href={`/posts/${post.slug}`} className="text-xl font-semibold text-slate-900">
          {post.title}
        </Link>
        <p className="text-sm text-slate-600">{post.metadata?.content ?? 'Read the full story.'}</p>
        {author?.title ? <p className="text-sm text-slate-500">By {author.title}</p> : null}
      </div>
    </article>
  )
}