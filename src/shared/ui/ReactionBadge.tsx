import { HTMLAttributes } from "react"
import Badge from "@shared/ui/Badge"
import { cn } from "@shared/utils/cn"

const MAXIMUM_REACTION_COUNT = 99

interface Props extends HTMLAttributes<HTMLSpanElement> {
  emoji: string
  count: string | number
}

export default function ReactionBadge({ className, emoji, count, ...restProps }: Props) {
  return (
    <Badge
      className={cn("px-2 py-1.5 bg-[rgba(0,0,0,0.54)] rounded-full text-sm text-white", className)}
      {...restProps}
    >
      {emoji} {formatReactionCount(Number(count))}
    </Badge>
  )
}

function formatReactionCount(count: number): string | number {
  if (count < 0) {
    return 0
  }

  return count > MAXIMUM_REACTION_COUNT ? "+99" : count
}
