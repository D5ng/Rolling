import { cva } from "class-variance-authority"
import { HTMLAttributes, ReactNode } from "react"
import { cn } from "@shared/utils/cn"
import Badge from "./Badge"

type RelationshipList = ["지인", "동료", "가족", "친구"]

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
  relationship: RelationshipList[number]
  children: ReactNode
}

export default function RelationshipBadge({ relationship, children, className, ...restProps }: Props) {
  return (
    <Badge className={cn(BadgeVariants({ className, variant: relationship }))} {...restProps}>
      {children}
    </Badge>
  )
}
