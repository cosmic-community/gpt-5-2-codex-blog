'use client'

import { useEffect, useState } from 'react'

export default function CosmicBadge({ bucketSlug }: { bucketSlug: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isDismissed = localStorage.getItem('cosmic-badge-dismissed')
    if (!isDismissed) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!isVisible) return null

  const safeBucketSlug = bucketSlug || 'unknown'

  return (
    <a
      href={`https://www.cosmicjs.com?utm_source=bucket_${safeBucketSlug}&utm_medium=referral&utm_campaign=app_badge&utm_content=built_with_cosmic`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 text-sm font-medium text-slate-900 no-underline"
      style={{
        position: 'fixed',
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        padding: '12px 16px',
        width: '180px'
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.backgroundColor = '#f9fafb'
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.backgroundColor = 'white'
      }}
    >
      <button
        onClick={(event) => {
          event.preventDefault()
          event.stopPropagation()
          setIsVisible(false)
          localStorage.setItem('cosmic-badge-dismissed', 'true')
        }}
        className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-800 transition-colors duration-200 hover:bg-gray-200"
        aria-label="Dismiss badge"
      >
        ×
      </button>
      <img
        src="https://cdn.cosmicjs.com/b67de7d0-c810-11ed-b01d-23d7b265c299-logo508x500.svg"
        alt="Cosmic Logo"
        className="h-5 w-5"
      />
      Built with Cosmic
    </a>
  )
}