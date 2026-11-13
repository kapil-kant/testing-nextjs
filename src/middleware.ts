import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Send old race links to the new races page.
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/events')) {
    return NextResponse.redirect(new URL('/races/', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/events/:path*'],
}
