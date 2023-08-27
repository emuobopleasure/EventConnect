import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import NewEventPage from "./pages/NewEvent";
import EventDetailPage from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />,
      children: [

        { index: true, element: <HomePage /> },
        { path: 'events', element: <EventsPage /> },
        { path: 'events/:eventId', element: <EventDetailPage /> },
        { path: 'events/new', element: <NewEventPage /> },
        { path: 'events/eventId/edit', element: <EditEventPage /> }
      ]
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
