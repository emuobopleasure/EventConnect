
import { json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData()
  // if (data.isError) {
  //   return data.message
  // }
  const events = data.events

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events')
  if (!response.ok) {
    // throw Response(JSON.stringify({message: 'Could not fetch events.'}),
    //   { status: 500 }
    // )
    // return { isError: true, message: 'Could not fetch events'}
    throw json({message: 'Could not fetch events.'},
      { status: 500 })
  } else {
    return response
  }
}