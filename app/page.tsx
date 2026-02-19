import Hero from '@/components/Hero'
import PostGrid from '@/components/PostGrid'
import CategoryCard from '@/components/CategoryCard'
import AuthorCard from '@/components/AuthorCard'
import { getAuthors, getCategories, getPosts } from '@/lib/cosmic'

export default async function HomePage() {
  const [posts, categories, authors] = await Promise.all([getPosts(), getCategories(), getAuthors()])
  const heroPost = posts[0]

  return (
    <div className="space-y-16 pb-16">
      <Hero post={heroPost} />

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Latest Posts</h2>
        </div>
        <PostGrid posts={posts} />
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-2xl font-semibold">Browse Categories</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-2xl font-semibold">Meet the Authors</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      </section>
    </div>
  )
}