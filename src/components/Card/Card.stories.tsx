import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from '../Text/Text'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    padding: 'md',
    children: (
      <>
        <Text as="p" size="lead">
          Elevated card
        </Text>
        <Text as="p" tone="muted" size="small">
          Subtle border and shadow.
        </Text>
      </>
    ),
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    padding: 'md',
    children: <Text as="p">Outline surface</Text>,
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    padding: 'sm',
    children: <Text as="p">Ghost / minimal</Text>,
  },
}

export const PaddingNone: Story = {
  args: {
    variant: 'outline',
    padding: 'none',
    children: <Text as="p">No inner padding</Text>,
  },
}
