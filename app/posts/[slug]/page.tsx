// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation'
import PostContent from '@/components/PostContent'
import { getPostBySlug } from '@/lib/cosmic'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-12">
      <PostContent post={post} />
    </article>
  )
}