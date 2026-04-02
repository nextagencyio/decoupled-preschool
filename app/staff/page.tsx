import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_STAFF } from '@/lib/queries'
import { StaffData } from '@/lib/types'
import Header from '../components/Header'
import StaffCard from '../components/StaffCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Our Staff | Little Sprouts Academy',
  description: 'Meet our qualified teachers, aides, and administrators who make Little Sprouts a nurturing place to learn.',
}

async function getStaffs() {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_STAFF, { first: 50 })
    return data?.nodeStaffs?.nodes || []
  } catch (error) {
    console.error('Error fetching staffs:', error)
    return []
  }
}

export default async function StaffsPage() {
  const items = await getStaffs()

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />

      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-10 right-[10%] w-14 h-14 bg-accent-300 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '3.5s' }} />
        <div className="absolute bottom-10 left-[8%] w-10 h-10 bg-pink-400 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
        <div className="absolute top-24 left-[20%] w-8 h-8 bg-green-400 rounded-2xl opacity-30 rotate-45 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Our Amazing Staff
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Meet the caring educators and team members who make Little Sprouts special.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold font-display text-gray-600 mb-2">No Staff Yet</h2>
              <p className="text-gray-500">
                Staff members will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <StaffCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
