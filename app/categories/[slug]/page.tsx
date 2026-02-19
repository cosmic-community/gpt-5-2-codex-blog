// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation'
import PostGrid from '@/components/PostGrid'
import { getCategoryBySlug, getPostsByCategoryId } from '@/lib/cosmic'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategoryId(category.id)

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold">{category.title}</h1>
      <p className="mt-3 text-slate-600">{category.metadata?.description ?? 'No description yet.'}</p>
      <PostGrid posts={posts} />
    </section>
  )
}