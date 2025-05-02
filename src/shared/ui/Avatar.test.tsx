import { describe, expect, it } from "vitest"
import { act, render, screen } from "@testing-library/react"
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"

describe("Avatar 렌더링 테스트", () => {
  it("Avatar Image가 올바르게 렌더링 되는 경우", () => {
    render(
      <Avatar>
        <AvatarImage src="/mockup.png" alt="프로필 썸네일" />
        <AvatarFallback>프로필 썸네일</AvatarFallback>
      </Avatar>
    )

    expect(screen.getByRole("img")).toBeInTheDocument()
  })

  // eslint-disable-next-line space-before-function-paren
  it("Avatar Image src가 유효하지 않은 경우", async () => {
    render(
      <Avatar>
        <AvatarImage src="mockup" alt="프로필 썸네일" />
        <AvatarFallback>프로필 썸네일</AvatarFallback>
      </Avatar>
    )

    act(() => {
      const imgElem = screen.getByRole("img")
      imgElem.dispatchEvent(new Event("error"))
    })

    expect(screen.getByText("프로필 썸네일")).toBeInTheDocument()
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
  })
})
