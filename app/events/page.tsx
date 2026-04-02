import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_EVENTS } from '@/lib/queries'
import { EventsData } from '@/lib/types'
import Header from '../components/Header'
import EventCard from '../components/EventCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Events | Little Sprouts Academy',
  description: 'Upcoming open houses, family activities, art shows, and celebrations at Little Sprouts Academy.',
}

async function getEvents() {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_EVENTS, { first: 50 })
    return data?.nodeEvents?.nodes || []
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

export default async function EventsPage() {
  const items = await getEvents()

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />

      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-14 left-[12%] w-12 h-12 bg-accent-400 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-14 right-[10%] w-10 h-10 bg-pink-400 rounded-lg opacity-30 rotate-12 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1s' }} />
        <div className="absolute top-20 right-[25%] w-8 h-8 bg-blue-400 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Fun Events
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Open houses, family gatherings, art shows, and special celebrations throughout the year.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold font-display text-gray-600 mb-2">No Events Yet</h2>
              <p className="text-gray-500">
                Events will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <EventCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
