import AuthorCard from '@/components/AuthorCard'
import { getAuthors } from '@/lib/cosmic'

export default async function AuthorsPage() {
  const authors = await getAuthors()

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Authors</h1>
      <p className="mt-3 text-slate-600">Get to know the voices behind the stories.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </section>
  )
}