export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Cosmic Writers Journal</p>
        <p className="text-sm text-slate-500">Built with Cosmic</p>
      </div>
    </footer>
  )
}