import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { headers } from 'next/headers'
import Link from 'next/link'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_EVENT_BY_PATH } from '@/lib/queries'
import { DrupalEvent } from '@/lib/types'
import Header from '../../components/Header'
import ResponsiveImage from '../../components/ResponsiveImage'
import { ArrowLeft } from 'lucide-react'

export const revalidate = 300
export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

interface EventByPathData {
  route: {
    entity: DrupalEvent
  } | null
}

async function getEvent(path: string): Promise<DrupalEvent | null> {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<EventByPathData>({
      query: GET_EVENT_BY_PATH,
      variables: { path },
      fetchPolicy: 'cache-first',
    })
    return data?.route?.entity || null
  } catch (error) {
    console.error('Error fetching event:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const path = `/events/${slug.join('/')}`
  const item = await getEvent(path)

  if (!item) {
    return { title: 'Event Not Found | Little Sprouts Academy' }
  }

  return {
    title: `${item.title} | Little Sprouts Academy`,
    description: ((item as any).body?.processed ? (item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 160) : '') || `Learn more about ${item.title}.`,
  }
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params
  const path = `/events/${slug.join('/')}`
  const item = await getEvent(path)

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />

      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute top-12 right-[8%] w-12 h-12 bg-accent-400 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-8 left-[12%] w-8 h-8 bg-green-400 rounded-2xl opacity-25 rotate-45 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/events"
            className="inline-flex items-center text-primary-200 hover:text-white mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">
            {item.title}
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {(item as any).image?.url && (
                <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg shadow-primary-200/30 mb-8 border-4 border-accent-200">
                  <ResponsiveImage
                    src={(item as any).image.url}
                    alt={(item as any).image.alt || item.title}
                    fill
                    className="object-cover"
                    variations={(item as any).image.variations}
                    targetWidth={800}
                  />
                </div>
              )}

              {(item as any).body?.processed && (
                <div className="bg-white rounded-3xl shadow-lg shadow-primary-100/30 p-8 border-2 border-primary-100">
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: (item as any).body.processed }}
                  />
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-lg shadow-primary-100/30 p-6 sticky top-24 border-2 border-accent-100">
                <h3 className="text-lg font-bold font-display text-primary-800 mb-4">Event Details</h3>
                <dl className="space-y-4">
                  {(item as any).location && (
                    <div>
                      <dt className="text-sm text-gray-500">Location</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).location}</dd>
                    </div>
                  )}
                </dl>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-500 transition-all shadow-lg shadow-primary-200 hover:-translate-y-0.5"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
