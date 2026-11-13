import type { Metadata } from 'next'

import AppProviders from './providers'

import './globals.css'

export const metadata: Metadata = {
  title: 'Race Finder',
  description: 'Find and join local running races.',
  metadataBase: new URL('https://example.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
