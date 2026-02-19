import type { Post } from '@/types'
import { renderMarkdown } from '@/lib/markdown'

export default function PostContent({ post }: { post: Post }) {
  const imageUrl = post.metadata?.featured_image?.imgix_url
  const author = post.metadata?.author
  const category = post.metadata?.category

  return (
    <div>
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {category?.title ? <span>{category.title}</span> : null}
          {author?.title ? <span>By {author.title}</span> : null}
        </div>
        <h1 className="text-3xl font-semibold text-slate-900">{post.title}</h1>
      </div>

      {imageUrl ? (
        <img
          src={`${imageUrl}?w=1600&h=900&fit=crop&auto=format,compress`}
          alt={post.title}
          width={800}
          height={450}
          className="mt-8 w-full rounded-3xl object-cover"
        />
      ) : null}

      <div
        className="prose prose-lg mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(post.metadata?.content) }}
      />
    </div>
  )
}