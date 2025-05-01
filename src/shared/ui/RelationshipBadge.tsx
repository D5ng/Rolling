import { cva } from "class-variance-authority"
import { HTMLAttributes } from "react"
import { cn } from "@shared/utils/cn"
import Badge from "./Badge"

export const RELATIONSHIP_LIST = ["지인", "동료", "가족", "친구"] as const
export type RelationshipList = (typeof RELATIONSHIP_LIST)[number]

const BadgeVariants = cva("px-2 h-5 inline-flex justify-center items-center rounded-[4px] text-sm", {
  variants: {
    variant: {
      지인: "bg-beige-100 text-beige-500",
      동료: "bg-purple-100 text-purple-600",
      가족: "bg-green-100 text-green-500",
      친구: "bg-blue-100 text-blue-500"
    }
  }
})

interface Props extends HTMLAttributes<HTMLSpanElement> {
  relationship: RelationshipList
}

export default function RelationshipBadge({ relationship, className, ...restProps }: Props) {
  if (!isValidRelationship(relationship)) {
    throw new Error(`${relationship}은 유효한 값이 아닙니다`)
  }

  return (
    <Badge className={cn(BadgeVariants({ className, variant: relationship }))} {...restProps}>
      {relationship}
    </Badge>
  )
}

function isValidRelationship(relationship: RelationshipList) {
  return RELATIONSHIP_LIST.includes(relationship)
}
