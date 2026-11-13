import { Card, CardContent, Typography } from '@mui/material'
import dayjs from 'dayjs'

import type { Race } from '@/types/race'

type RaceCardProps = {
  race: Race
}

export default function RaceCard({ race }: RaceCardProps) {
  return (
    <Card className='mb-4'>
      <CardContent>
        <Typography variant='h6'>{race.name}</Typography>
        <Typography variant='body2'>
          {race.city} · {dayjs(race.date).format('DD MMM YYYY')} · {race.distanceKm} km
        </Typography>
      </CardContent>
    </Card>
  )
}
