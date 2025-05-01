import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import RelationshipBadge, { RELATIONSHIP_LIST } from "./RelationshipBadge"

describe("Relationship Badge 컴포넌트 테스트", () => {
  test("랜덤한 값으로 사용자 예상 시나리오 테스트", () => {
    const getRandomRelationshipLabel = () => RELATIONSHIP_LIST[Math.floor(Math.random() * RELATIONSHIP_LIST.length)]
    const relationship = getRandomRelationshipLabel()

    render(<RelationshipBadge relationship={relationship} />)
    expect(screen.getByText(relationship)).toBeInTheDocument()
    expect(screen.getByText(relationship).textContent).toBe(relationship)
  })

  test("모든 Relationship 렌더링 테스트", () => {
    RELATIONSHIP_LIST.forEach((relationship) => {
      const { container } = render(<RelationshipBadge relationship={relationship} />)
      expect(container.textContent).toBe(container.textContent)
      expect(screen.getByText(relationship)).toBeInTheDocument()
    })
  })

  test("런타임 실패 케이스", () => {
    expect(() => {
      render(<RelationshipBadge relationship={"연인" as never} />)
    }).toThrowError(Error)
  })
})
