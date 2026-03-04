'use client'

import { DrupalHomepage } from '@/lib/types'
import Link from 'next/link'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Where Every Day is an Adventure!'
  const subtitle = (homepageContent as any)?.heroSubtitle || ''
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24 md:py-36 overflow-hidden">
      {/* Background image with colorful overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80&fit=crop)' }}
      />

      {/* Floating decorative shapes */}
      <div className="absolute top-20 left-[10%] w-20 h-20 bg-yellow-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute bottom-32 right-[15%] w-16 h-16 bg-pink-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute top-40 right-[25%] w-12 h-12 bg-green-400 rounded-2xl opacity-50 rotate-45 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
      <div className="absolute bottom-20 left-[20%] w-10 h-10 bg-blue-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
      <div className="absolute top-16 right-[10%] w-14 h-14 bg-accent-300 rounded-xl opacity-50 -rotate-12 animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '3.2s' }} />
      <div className="absolute bottom-40 left-[5%] w-8 h-8 bg-pink-300 rounded-lg opacity-40 rotate-12 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto font-medium">
            {subtitle}
          </p>
        )}
        {description && (
          <div className="text-lg text-primary-100 max-w-2xl mx-auto mb-10" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-400 text-primary-900 rounded-full font-bold text-lg hover:bg-accent-300 transition-all duration-200 shadow-lg shadow-accent-400/30 hover:-translate-y-1 hover:shadow-xl"
          >
            Enroll Your Child
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-200 hover:-translate-y-1"
          >
            Schedule a Tour
          </Link>
        </div>
      </div>
    </section>
  )
}
