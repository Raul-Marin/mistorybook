import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Type here…',
    inputSize: 'md',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    hint: 'We never share your email.',
  },
}

export const Error: Story = {
  args: {
    label: 'Password',
    type: 'password',
    error: 'Must be at least 8 characters.',
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    inputSize: 'sm',
    placeholder: 'sm',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    placeholder: 'Cannot edit',
  },
}
