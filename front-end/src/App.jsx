import Home from "./components/Home"
import Navbar from "./components/Navbar";
import GenerateMovie from "./components/GenerateMovie";
import Ticket from "./components/Ticket";
import { createBrowserRouter, RouterProvider } from "react-router";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>,
    },
    {
      path:"/movies",
      element:<><Navbar/><GenerateMovie/></>,
    },
    {
      path:"/ticket",
      element:<><Navbar/><Ticket/></>
    },
  ]);

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
