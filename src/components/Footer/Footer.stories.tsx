import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from '../Text/Text'
import { Footer, FooterCode, FooterLink } from './Footer'

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <Text as="p" size="small" tone="muted">
        Documentación en <FooterCode>npm run storybook</FooterCode> —{' '}
        <FooterLink href="http://localhost:6006">localhost:6006</FooterLink>
      </Text>
    ),
  },
}

export const Subtle: Story = {
  args: {
    variant: 'subtle',
    children: (
      <Text as="p" size="small" tone="muted">
        Fondo sutil; borde superior conservado.
      </Text>
    ),
  },
}

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    children: (
      <Text as="p" size="small" tone="muted">
        Sin borde ni fondo de superficie.
      </Text>
    ),
  },
}

export const WithLinks: Story = {
  render: () => (
    <Footer variant="default">
      <Text as="p" size="small" tone="muted" style={{ margin: 0 }}>
        <FooterLink href="#">Docs</FooterLink>
        {' · '}
        <FooterLink href="#">GitHub</FooterLink>
        {' · '}
        <FooterLink href="#">Changelog</FooterLink>
      </Text>
      <Text as="p" size="small" tone="muted" style={{ marginTop: '0.5rem' }}>
        © {new Date().getFullYear()} Mistorybook
      </Text>
    </Footer>
  ),
}
