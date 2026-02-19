import Link from 'next/link'
import type { Author } from '@/types'

export default function AuthorCard({ author }: { author: Author }) {
  const headshot = author.metadata?.headshot?.imgix_url

  return (
    <Link
      href={`/authors/${author.slug}`}
      className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1"
    >
      {headshot ? (
        <img
          src={`${headshot}?w=160&h=160&fit=crop&auto=format,compress`}
          alt={author.title}
          width={80}
          height={80}
          className="h-16 w-16 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-lg font-semibold">
          {author.title.slice(0, 1)}
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{author.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{author.metadata?.bio ?? 'No bio available.'}</p>
      </div>
    </Link>
  )
}