import Link from 'next/link'
import type { Category } from '@/types'

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1"
    >
      <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
      <p className="mt-3 text-sm text-slate-600">
        {category.metadata?.description ?? 'Explore the latest articles.'}
      </p>
    </Link>
  )
}