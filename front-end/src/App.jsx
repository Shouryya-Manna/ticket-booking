import Home from "./components/Home"
import GenerateMovie from "./components/GenerateMovie";
import { createBrowserRouter, RouterProvider } from "react-router";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:"/movies",
      element:<><Home /><GenerateMovie/></>,
    },
    {},
  ]);

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
