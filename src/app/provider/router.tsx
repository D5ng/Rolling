import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainPage from "@pages/MainPage"
import DefaultLayout from "@pages/DefaultLayout"

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: DefaultLayout,
      children: [
        {
          index: true,
          Component: MainPage
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}
