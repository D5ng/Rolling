import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"
import type { Meta, StoryObj } from "@storybook/react"

interface AvatarProps {
  src: string
  alt: string
  fallbackText: string
}

const meta = {
  title: "shared/ui/avatar",
  component: Avatar,
  argTypes: {
    src: { control: "text", description: "src 속성" },
    alt: { control: "text", description: "alt 속성" },
    fallbackText: { control: "text", name: "Fallback Text", description: "화면에 보여질 대체 텍스트" }
  }
} satisfies Meta<AvatarProps>

export default meta

type Story = StoryObj<AvatarProps>

export const Default: Story = {
  args: {
    src: "mockup.png",
    alt: "사용자 이미지",
    fallbackText: "동현"
  },
  render: () => (
    <Avatar>
      <AvatarImage src="mockup.png" alt="프로필" />
      <AvatarFallback>동현</AvatarFallback>
    </Avatar>
  )
}

export const WithFallback: Story = {
  args: {
    src: "none.png",
    alt: "사용자 이미지",
    fallbackText: "동현"
  },
  render: ({ src, alt, fallbackText }) => (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  )
}
