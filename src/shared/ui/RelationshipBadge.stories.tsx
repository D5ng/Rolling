import { Meta, StoryObj } from "@storybook/react"
import RelationshipBadge, { RELATIONSHIP_LIST } from "./RelationshipBadge"

const meta = {
  title: "shared/ui/badge/RelationshipBadge",
  component: RelationshipBadge,
  argTypes: {
    relationship: { options: RELATIONSHIP_LIST }
  }
} satisfies Meta<typeof RelationshipBadge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    relationship: "가족"
  }
}
