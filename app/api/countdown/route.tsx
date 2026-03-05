import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET() {
  const launch = new Date('2026-04-01T00:00:00Z')
  const now = new Date()
  let diffHours = Math.floor((launch.getTime() - now.getTime()) / 1000 / 60 / 60)
  if (diffHours < 0) diffHours = 0
  const days = String(Math.floor(diffHours / 24)).padStart(2, '0')
  const hours = String(diffHours % 24).padStart(2, '0')

  return new ImageResponse(
    <div style={{
      width: '600px', height: '200px', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      background: '#1a0505', color: 'white',
      fontSize: '80px', fontWeight: 'bold'
    }}>
      {days}d : {hours}h
    </div>,
    { width: 600, height: 200 }
  )
}
