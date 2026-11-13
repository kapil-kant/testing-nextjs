import { render, screen } from '@testing-library/react'

import RaceCard from './RaceCard'

describe('RaceCard', () => {
  it('shows the race name and distance', () => {
    render(
      <RaceCard
        race={{ id: '1', name: 'City 5K', city: 'Pune', date: '2026-12-01', distanceKm: 5 }}
      />,
    )
    expect(screen.getByText('City 5K')).toBeInTheDocument()
  })
})
