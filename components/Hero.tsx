import Link from 'next/link'
import type { Post } from '@/types'

export default function Hero({ post }: { post?: Post }) {
  if (!post) {
    return (
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-semibold">Welcome to Cosmic Writers Journal</h1>
        <p className="mt-4 text-lg text-slate-600">
          Fresh stories will appear here as soon as your team publishes.
        </p>
      </section>
    )
  }

  const imageUrl = post.metadata?.featured_image?.imgix_url

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Featured</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">{post.title}</h1>
          <p className="mt-4 text-lg text-slate-600">
            {post.metadata?.content ?? 'Read the latest feature story.'}
          </p>
          <Link
            href={`/posts/${post.slug}`}
            className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
          >
            Read the story
          </Link>
        </div>
        <div className="overflow-hidden rounded-3xl bg-slate-100">
          {imageUrl ? (
            <img
              src={`${imageUrl}?w=1200&h=900&fit=crop&auto=format,compress`}
              alt={post.title}
              width={600}
              height={450}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-64 items-center justify-center text-slate-500">No image</div>
          )}
        </div>
      </div>
    </section>
  )
}