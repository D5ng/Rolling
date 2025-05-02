import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import ReactionBadge from "./ReactionBadge"

describe("Reaction Badeg 렌더링 테스트", () => {
  it("렌더링 테스트", () => {
    render(<ReactionBadge count="20" emoji="👍" />)
    expect(screen.getByText("👍 20")).toBeInTheDocument()
  })

  it("Reaction 카운트가 99가 넘어갈 때", () => {
    render(<ReactionBadge count="1999" emoji="👍" />)
    expect(screen.getByText("👍 +99")).toBeInTheDocument()
  })

  it("Reaction 카운트가 음수일 때", () => {
    render(<ReactionBadge count={-5} emoji="👍" />)
    expect(screen.getByText("👍 0")).toBeInTheDocument()
  })
})
