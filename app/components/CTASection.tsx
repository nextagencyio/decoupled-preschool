'use client'

import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Ready to Join the Fun?'
  const description = (homepageContent as any)?.ctaDescription?.processed || ''
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Enroll Now'
  const secondaryLabel = (homepageContent as any)?.ctaSecondary || 'Learn More'

  return (
    <section className="bg-accent-400 py-20 relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-8 left-[8%] w-16 h-16 bg-primary-400 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-8 right-[12%] w-12 h-12 bg-pink-400 rounded-2xl opacity-30 rotate-45 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
      <div className="absolute top-12 right-[30%] w-10 h-10 bg-green-400 rounded-full opacity-25 animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-16 left-[25%] w-8 h-8 bg-blue-300 rounded-lg opacity-30 -rotate-12 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-900 mb-4">{title}</h2>
        {description && (
          <div className="text-primary-800 mb-8 max-w-2xl mx-auto text-lg" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/contact" className="px-8 py-4 bg-primary-700 text-white rounded-full hover:bg-primary-600 transition-all duration-200 font-bold text-lg shadow-lg hover:-translate-y-1 hover:shadow-xl">
            {primaryLabel}
          </a>
          <a href="/about" className="px-8 py-4 border-3 border-primary-800 text-primary-900 rounded-full hover:bg-primary-800 hover:text-white transition-all duration-200 font-bold text-lg">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
