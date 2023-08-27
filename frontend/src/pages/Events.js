import React from 'react'
import { Link } from 'react-router-dom'

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'someEvent'
  },
  {
    id: 'e2',
    title: 'anotherEvent'
  }
]

const EventsPage = () => {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {
          DUMMY_EVENTS.map((event) => (
            <li key={event.id}>
              <Link to={`/events/${event.id}`}>
                {event.title}
              </Link>
            </li>

          ))
        }
      </ul>
    </>
  )
}

export default EventsPage