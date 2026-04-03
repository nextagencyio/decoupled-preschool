import { getClient } from '@/lib/drupal-client'
import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { checkConfiguration } from '../lib/config-check'
import { GET_HOMEPAGE_DATA } from '@/lib/queries'

// Enable ISR with 1 hour revalidation
export const revalidate = 3600
export const dynamic = 'force-dynamic'



export async function generateMetadata(): Promise<Metadata> {
  const title = 'Little Sprouts Academy - Nurturing Young Minds'
  const description = 'Discover our play-based learning programs for toddlers through pre-kindergarten. Little Sprouts Academy provides a safe, nurturing environment for your child to grow and learn.'

  return {
    title,
    description,
    keywords: ['Little Sprouts Academy', 'Preschool', 'Early Education', 'Play-Based Learning', 'Toddler Programs', 'Pre-K'],
    openGraph: {
      title: `${title}`,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title}`,
      description,
    },
  }
}

export default async function Home() {
  // Check if the app is properly configured
  const configStatus = checkConfiguration()

  if (!configStatus.isConfigured) {
    return <SetupGuide missingVars={configStatus.missingVars} />
  }

  try {
    const client = getClient()
    // Try the homepage list query first (works without route resolution)
    const data = await client.raw(GET_HOMEPAGE_DATA)
    const homepageContent = data?.nodeHomepages?.nodes?.[0] || null

    // If no homepage content from list query, try route-based lookup as fallback
    if (!homepageContent) {
      const routeContent = await client.getEntryByPath('/') as any
      if (routeContent) {
        return <HomepageRenderer homepageContent={routeContent} />
      }
      const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
      return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
    }

    return <HomepageRenderer homepageContent={homepageContent} />
  } catch (error) {
    console.error('Error loading homepage:', error)
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }
}
