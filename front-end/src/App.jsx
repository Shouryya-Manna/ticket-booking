import Home from "./components/Home";
import Navbar from "./components/Navbar";
import GenerateMovie from "./components/GenerateMovie";
import GenerateTicket from "./components/GenerateTicket";
import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/movies",
      element: (
        <>
          <Navbar />
          <GenerateMovie />
        </>
      ),
    },
    {
      path: "/ticket",
      element: (
        <>
          <Navbar />
          <GenerateTicket />
        </>
      ),
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
