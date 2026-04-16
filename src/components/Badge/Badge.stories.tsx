import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = {
  args: {
    children: 'Neutral',
    variant: 'neutral',
  },
}

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
}

export const Danger: Story = {
  args: {
    children: 'Danger',
    variant: 'danger',
  },
}

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  ),
}
