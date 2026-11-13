import { apiRoot } from '@/infrastructure/http/config'

const homepage = process.env.NEXT_PUBLIC_BASE || ''

export default async function sitemap() {
  let slugs: { data: { blogs: string[] } } = { data: { blogs: [] } }

  try {
    const response = await fetch(`${apiRoot}seo`, { next: { revalidate: 300 } })
    if (!response.ok) {
      throw new Error('Failed to fetch sitemap data')
    }
    slugs = await response.json()
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }

  const blogPages = slugs.data.blogs.map((slug) => ({ url: `${homepage}/blog/${slug}/` }))
  return [{ url: `${homepage}/` }, { url: `${homepage}/races/` }, ...blogPages]
}
