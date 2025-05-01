import { Outlet } from "react-router-dom"
import Header from "@shared/ui/Header"

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="mx-5">
        <Outlet />
      </main>
    </>
  )
}
