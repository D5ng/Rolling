import { Link } from "react-router-dom"
import Button from "@shared/ui/Button"

export default function Header() {
  return (
    <header className="px-4 py-3 border-b border-gray-200">
      <div className="flex justify-between xl:max-w-[1200px] xl:mx-auto">
        <h1>
          <Link to="/" className="flex gap-2">
            <img src="/logo.svg" alt="메인 페이지 바로가기" />
            <span className="text-gray-600 font-bold text-xl">Rolling</span>
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Button asChild variant="outlined" className="px-4 xl:w-[157px]">
                <Link to="/create">롤링 페이퍼 만들기</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
