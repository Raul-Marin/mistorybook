import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading, Text } from './Text'

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Body: Story = {
  args: {
    as: 'p',
    children: 'Body text uses the default tone and relaxed line height.',
    size: 'body',
    tone: 'default',
  },
}

export const Muted: Story = {
  args: {
    as: 'p',
    children: 'Supporting copy with muted tone.',
    tone: 'muted',
    size: 'body',
  },
}

export const Danger: Story = {
  args: {
    as: 'p',
    children: 'Validation or error message style.',
    tone: 'danger',
    size: 'small',
  },
}

export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
    </div>
  ),
}
