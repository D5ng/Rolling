import { RouterProvider, createBrowserRouter } from "react-router-dom"
import DefaultLayout from "@shared/layout/DefaultLayout"
import MainPage from "@pages/main"

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
