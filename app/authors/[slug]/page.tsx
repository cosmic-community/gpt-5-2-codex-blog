// app/authors/[slug]/page.tsx
import { notFound } from 'next/navigation'
import PostGrid from '@/components/PostGrid'
import { getAuthorBySlug, getPostsByAuthorId } from '@/lib/cosmic'

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthorId(author.id)

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
        {author.metadata?.headshot?.imgix_url ? (
          <img
            src={`${author.metadata.headshot.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
            alt={author.title}
            width={120}
            height={120}
            className="h-24 w-24 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-xl font-semibold">
            {author.title.slice(0, 1)}
          </div>
        )}
        <div>
          <h1 className="text-3xl font-semibold">{author.title}</h1>
          <p className="mt-2 text-slate-600">{author.metadata?.bio ?? 'No bio available.'}</p>
        </div>
      </div>
      <PostGrid posts={posts} />
    </section>
  )
}