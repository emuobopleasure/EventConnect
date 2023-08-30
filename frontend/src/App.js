import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import NewEventPage from "./pages/NewEvent";
import EventDetailPage from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";
import EventRootLayout from "./pages/EventRoot";


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />,
      children: [

        { index: true, element: <HomePage /> },
        { path: 'events', element: <EventRootLayout/>, children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          { path: ':eventId', element: <EventDetailPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: 'eventId/edit', element: <EditEventPage /> }

        ]}
      ]
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
