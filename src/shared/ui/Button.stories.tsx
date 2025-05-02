import { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"

const meta = {
  title: "shared/ui/button",
  component: Button
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Text",
    variant: "primary"
  },
  render: ({ children, variant }) => {
    return <Button variant={variant}>{children}</Button>
  }
}

export const Secondary: Story = {
  args: {
    children: "Text",
    variant: "secondary"
  },
  render: ({ children, variant }) => {
    return <Button variant={variant}>{children}</Button>
  }
}

export const Outlined: Story = {
  args: {
    children: "Text",
    variant: "outlined"
  },
  render: ({ children, variant }) => {
    return <Button variant={variant}>{children}</Button>
  }
}
