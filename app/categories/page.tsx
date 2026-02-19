import CategoryCard from '@/components/CategoryCard'
import { getCategories } from '@/lib/cosmic'

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Categories</h1>
      <p className="mt-3 text-slate-600">Discover posts grouped by topic and focus.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}