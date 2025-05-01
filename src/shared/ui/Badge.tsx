import { cva, VariantProps } from "class-variance-authority"
import { ComponentType, HTMLAttributes } from "react"
import { cn } from "@shared/utils/cn"
import Slottable from "@shared/lib/utils/Slottable"
import Slot from "@shared/lib/utils/Slot"

const BadgeVariants = cva("", {
  variants: {
    variant: {
      primary: "bg-purple-600 rounded-full text-sm px-3 py-1 font-bold text-white"
    }
  }
})

interface Props<T extends HTMLElement = HTMLElement> extends VariantProps<typeof BadgeVariants>, HTMLAttributes<T> {
  asChild?: boolean
  Icon?: ComponentType
}

export default function Badge({ Icon, asChild, children, variant, className, ...restProps }: Props<HTMLElement>) {
  const Element = asChild ? Slot : "span"
  return (
    <Element className={cn(BadgeVariants({ className, variant }))} {...restProps}>
      {Icon && <Icon />}
      <Slottable>{children}</Slottable>
    </Element>
  )
}
