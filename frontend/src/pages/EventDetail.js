import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetailPage = () => {
  const params = useParams()
  return (
    <>
      <h1>EventDetailsPage</h1>
      <p>Ecent id: {params.eventId}</p>
    </>
  )
}

export default EventDetailPage