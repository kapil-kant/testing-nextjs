import type { Metadata } from 'next'

import { baseFetch } from '@/infrastructure/http/baseFetch'

type BlogPost = { title: string; body: string }

type Props = {
  params: { slug: string }
}

// ISR: rendered on first request, then cached and revalidated daily.
export const revalidate = 24 * 60 * 60

export async function generateStaticParams() {
  // No paths prebuilt; posts are generated on demand and then cached.
  return []
}

async function loadPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await baseFetch<BlogPost>(`blogs/${slug}`)
    return response.data
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await loadPost(params.slug)
  return { title: post?.title ?? 'Blog' }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await loadPost(params.slug)
  if (!post) {
    return <main className='p-8'>Post not found.</main>
  }
  return (
    <main className='p-8'>
      <h1 className='text-2xl'>{post.title}</h1>
      <p className='mt-4'>{post.body}</p>
    </main>
  )
}
