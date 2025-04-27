import { cva, VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react"
import Slot from "@shared/lib/utils/Slot"
import { cn } from "@shared/utils/cn"
import Slottable from "@shared/lib/utils/Slottable"

const ButtonVariants = cva(
  "min-w-[122px] flex justify-between items-center rounded-md h-[40px] md:w-full xl:w-[280px] disabled:text-white disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "text-white font-normal bg-purple-600 md:font-bold md:h-[56px] md:rounded-xl md:text-lg hover:bg-purple-700 hover:text-white active:bg-purple-800",
        secondary:
          "text-base h-[40px] border border-purple-600 text-purple-600 hover:bg-purple-100 active:bg-purple-200",
        outlined: "text-base h-[40px] border border-gray-300 hover:bg-gray-100 active:bg-gray-200"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
)

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
  asChild?: boolean
}

export default function Button({ asChild, variant, className, children, ...restProps }: Props) {
  const Element = asChild ? Slot : "button"
  return (
    <Element className={cn(ButtonVariants({ variant, className }))} {...restProps}>
      <Slottable>{children}</Slottable>
    </Element>
  )
}
