'use client'

import { useEffect, useState } from 'react'

import { TextField } from '@mui/material'

import RaceCard from '@/components/RaceCard'
import { baseFetch } from '@/infrastructure/http/baseFetch'
import { setSearchText } from '@/redux/store'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import type { Race } from '@/types/race'

export default function RacesPage() {
  const [races, setRaces] = useState<Race[]>([])
  const [error, setError] = useState('')
  const searchText = useAppSelector((state) => state.ui.searchText)
  const dispatch = useAppDispatch()

  useEffect(() => {
    baseFetch<Race[]>('races')
      .then((response) => setRaces(response.data))
      .catch(() => setError('Could not load races. Please try again.'))
  }, [])

  const visibleRaces = races.filter((race) =>
    race.name.toLowerCase().includes(searchText.toLowerCase()),
  )

  return (
    <main className='p-8'>
      <h1 className='text-2xl'>Upcoming races</h1>
      <TextField
        label='Search races'
        value={searchText}
        onChange={(event) => dispatch(setSearchText(event.target.value))}
        className='my-4'
      />
      {error && <p className='text-red-600'>{error}</p>}

      {/* Race count / no matches message */}
      {visibleRaces.length === 0 ? (
        <p className='mb-4'>No races match your search</p>
      ) : (
        <p className='mb-4'>
          {visibleRaces.length === 1
            ? '1 race found'
            : `${visibleRaces.length} races found`}
        </p>
      )}

      {/* Only show list if races are present */}
      {visibleRaces.length > 0 && visibleRaces.map((race) => (
        <RaceCard key={race.id} race={race} />
      ))}
    </main>
  )
}
