import { cva, VariantProps } from "class-variance-authority"
import { createContext, HTMLAttributes, ImgHTMLAttributes, useContext, useState } from "react"
import { cn } from "@shared/utils/cn"

/*****************************************************
 *          Avatar Context (Compound Pattern)
 *****************************************************/
type ImageLoadingStatus = "loading" | "loaded" | "error"

interface AvatarContextValue {
  imageStatus: ImageLoadingStatus
  onImageStatus: (status: ImageLoadingStatus) => void
}

const AvatarContext = createContext<AvatarContextValue | undefined>(undefined)

function useAvatarContext() {
  const context = useContext(AvatarContext)
  if (!context) {
    throw new Error("Avatar Provider에서만 사용할 수 있어요.")
  }

  return context
}

const AvatarVariants = cva("border border-white rounded-full overflow-hidden", {
  variants: {
    size: {
      small: "w-7 h-7",
      medium: "w-14 h-14"
    }
  },
  defaultVariants: {
    size: "small"
  }
})

interface Props extends VariantProps<typeof AvatarVariants>, ImgHTMLAttributes<HTMLImageElement> {}

/*****************************************************
 *                Avatar Root Component
 *****************************************************/
function Avatar({ children, size, className }: Props) {
  const { imageStatus, onImageStatus } = useImageStatus()

  return (
    <AvatarContext.Provider value={{ imageStatus, onImageStatus }}>
      <div className={cn(AvatarVariants({ size }), className)}>{children}</div>
    </AvatarContext.Provider>
  )
}

/*****************************************************
 *                   Avatar Image
 *****************************************************/
interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
}

function AvatarImage({ src, alt, className, ...restProps }: AvatarImageProps) {
  const { imageStatus, onImageStatus } = useAvatarContext()

  if (imageStatus === "error") {
    return null
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn("object-cover object-center", className)}
      {...restProps}
      onLoad={() => onImageStatus("loaded")}
      onError={() => onImageStatus("error")}
    />
  )
}

/*****************************************************
 *                  Avatar Fallback
 *****************************************************/
function AvatarFallback({ children, className }: HTMLAttributes<HTMLSpanElement>) {
  const { imageStatus } = useAvatarContext()

  if (imageStatus === "loaded") {
    return null
  }

  return (
    <span className={cn("w-full h-full text-xs flex justify-center items-center bg-gray-400 text-white", className)}>
      {children}
    </span>
  )
}

/*****************************************************
 *               Avatar Internal Hooks
 *****************************************************/
function useImageStatus() {
  const [imageStatus, setImageStatus] = useState<ImageLoadingStatus>("loading")

  const onImageStatus = (status: ImageLoadingStatus) => {
    setImageStatus(status)
  }

  return {
    imageStatus,
    onImageStatus
  }
}

export { Avatar, AvatarImage, AvatarFallback }
