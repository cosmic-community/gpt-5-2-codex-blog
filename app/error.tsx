'use client'

export default function Error() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-center justify-center px-6">
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <p className="mt-3 text-slate-600">Please refresh the page or try again later.</p>
    </div>
  )
}