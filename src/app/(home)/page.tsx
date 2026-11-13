import Link from 'next/link'

import { Button } from '@mui/material'

export default function HomePage() {
  return (
    <main className='p-8'>
      <h1 className='text-3xl text-primary-black-500'>Find your next race</h1>
      <p className='mt-2'>Browse upcoming races near you.</p>
      <Link href='/races/'>
        <Button variant='contained' className='mt-4'>
          View races
        </Button>
      </Link>
    </main>
  )
}
