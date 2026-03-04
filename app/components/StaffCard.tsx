import Link from 'next/link'
import { DrupalStaff } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight } from 'lucide-react'

interface StaffCardProps {
  item: DrupalStaff
}

const cardAccents = [
  { border: 'border-primary-200', shadow: 'shadow-primary-200/40', badge: 'bg-primary-100 text-primary-700' },
  { border: 'border-pink-200', shadow: 'shadow-pink-200/40', badge: 'bg-pink-100 text-pink-700' },
  { border: 'border-accent-200', shadow: 'shadow-accent-200/40', badge: 'bg-accent-100 text-accent-700' },
  { border: 'border-green-200', shadow: 'shadow-green-200/40', badge: 'bg-green-100 text-green-700' },
  { border: 'border-blue-200', shadow: 'shadow-blue-200/40', badge: 'bg-blue-100 text-blue-700' },
]

export default function StaffCard({ item }: StaffCardProps) {
  const idx = item.title ? item.title.charCodeAt(0) % cardAccents.length : 0
  const accent = cardAccents[idx]

  return (
    <Link
      href={item.path || '#'}
      className={`group bg-white rounded-3xl border-2 ${accent.border} shadow-lg ${accent.shadow} hover:-rotate-1 hover:scale-105 transition-all duration-300 overflow-hidden`}
    >
      <div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700">
        {(item as any).photo?.url ? (
          <ResponsiveImage
            src={(item as any).photo.url}
            alt={(item as any).photo.alt || item.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            variations={(item as any).photo.variations}
            targetWidth={400}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold font-display text-white/60">{item.title?.charAt(0)}</div>
          </div>
        )}
      </div>

      <div className="p-6">
        {(item as any).position && (
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${accent.badge}`}>
            {(item as any).position}
          </span>
        )}
        <h3 className="text-xl font-bold font-display text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {item.title}
        </h3>

        {(item as any).body?.processed && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
          </p>
        )}

        <div className="flex items-center text-primary-600 font-bold group-hover:gap-2 transition-all">
          Learn more
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
