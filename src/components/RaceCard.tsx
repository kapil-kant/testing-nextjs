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
        <Typography variant='body2' sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {race.city} · {dayjs(race.date).format('DD MMM YYYY')} · {race.distanceKm} km
          <span>
            <Typography
              component="span"
              variant="caption"
              sx={{
                ml: 1,
                px: 1,
                borderRadius: '4px',
                backgroundColor: dayjs(race.date).isBefore(dayjs(), 'day') ? '#f44336' : '#4caf50',
                color: '#fff',
                fontWeight: 500,
                fontSize: '0.75rem',
              }}
            >
              {dayjs(race.date).isBefore(dayjs(), 'day') ? 'Finished' : 'Upcoming'}
            </Typography>
          </span>
        </Typography>
      </CardContent>
    </Card>
  )
}
