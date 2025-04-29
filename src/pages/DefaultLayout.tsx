import { Outlet } from "react-router-dom"
import Header from "src/widgets/common/Header"

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
