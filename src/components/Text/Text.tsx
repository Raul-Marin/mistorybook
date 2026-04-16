import clsx from 'clsx'
import type { HTMLAttributes } from 'react'
import styles from './Text.module.css'

export type TextAs = 'span' | 'p' | 'h1' | 'h2' | 'h3'
export type TextSize = 'small' | 'body' | 'lead'
export type TextTone = 'default' | 'muted' | 'danger'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TextAs
  size?: TextSize
  tone?: TextTone
}

const headingStyles: Partial<Record<TextAs, string | undefined>> = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
}

export function Text({
  as: Component = 'span',
  size = 'body',
  tone = 'default',
  className,
  ...props
}: TextProps) {
  const isHeading = Component === 'h1' || Component === 'h2' || Component === 'h3'
  const sizeClass = isHeading
    ? headingStyles[Component]
    : size === 'small'
      ? styles.sizeSmall
      : size === 'lead'
        ? styles.sizeLead
        : styles.sizeBody

  const toneClass =
    tone === 'muted'
      ? styles.toneMuted
      : tone === 'danger'
        ? styles.toneDanger
        : styles.toneDefault

  return (
    <Component
      className={clsx(styles.text, sizeClass, toneClass, className)}
      {...props}
    />
  )
}

/** Polymorphic heading helper with correct semantics */
const headingTag = { 1: 'h1', 2: 'h2', 3: 'h3' } as const

export function Heading({
  level,
  ...rest
}: Omit<TextProps, 'as'> & { level: 1 | 2 | 3 }) {
  return <Text as={headingTag[level]} {...rest} />
}
