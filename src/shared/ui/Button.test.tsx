import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Link, MemoryRouter } from "react-router-dom"
import Button from "./Button"

describe("Button 렌더링 테스트", () => {
  it("Button 렌더링", () => {
    render(<Button>버튼</Button>)
    expect(screen.getByText("버튼")).toBeInTheDocument()
  })

  it("Button asChild 테스트", () => {
    render(
      <MemoryRouter>
        <Button asChild>
          <Link to="/">버튼</Link>
        </Button>
      </MemoryRouter>
    )

    expect(screen.queryByRole("link")).toBeInTheDocument()
  })
})
