import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent";
import EventDetailPage, { loader as eventsDetailLoader } from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";
import EventRootLayout from "./pages/EventRoot";
import ErrorPage from "./pages/Error";


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [

        { index: true, element: <HomePage /> },
        {
          path: 'events', 
          element: <EventRootLayout />, 
          children: [
            { 
              index: true, 
              element: <EventsPage />, 
              loader: eventsLoader 
            },
            {
              path: ':eventId',
              id: 'event-detail',
              loader: eventsDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage/>
                },
                {
                  path: 'edit',
                  element: <EditEventPage/>
                },
              ]
            },
            {
              path: 'new',
              element: <NewEventPage/>,
              action: newEventAction
            }
          ]
        }
      ]
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
