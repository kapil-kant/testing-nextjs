'use client'

import { ThemeProvider } from '@mui/material/styles'
import { SessionProvider } from 'next-auth/react'

import { Providers as ReduxProviders } from '@/redux/provider'

import theme from './theme'

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProviders>
        <SessionProvider>{children}</SessionProvider>
      </ReduxProviders>
    </ThemeProvider>
  )
}
