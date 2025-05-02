import { Meta, StoryObj } from "@storybook/react"
import ReactionBadge from "./ReactionBadge"

const meta = {
  title: "shared/ui/badge/ReactionBadage",
  component: ReactionBadge
} satisfies Meta<typeof ReactionBadge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    count: 20,
    emoji: "👍"
  }
}

export const Exception: Story = {
  args: {
    title: "반응 수가 99 초과일 때",
    count: 9999,
    emoji: "👍"
  }
}
