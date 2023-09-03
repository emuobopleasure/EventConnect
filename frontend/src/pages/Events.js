
import { useLoaderData } from 'react-router-dom';
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
  const response = await fetch('http://localhost:8080/eventsfdd')
  if (!response.ok) {
    throw { message: 'Could not fetch events'}
    // return { isError: true, message: 'Could not fetch events'}
  } else {
    return response
  }
}