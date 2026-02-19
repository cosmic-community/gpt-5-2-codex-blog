import Link from 'next/link'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/categories', label: 'Categories' },
  { href: '/authors', label: 'Authors' }
]

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          Cosmic Writers Journal
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}