import clsx from 'clsx'
import type { HTMLAttributes } from 'react'
import styles from './Card.module.css'

export type CardVariant = 'elevated' | 'outline' | 'ghost'
export type CardPadding = 'none' | 'sm' | 'md'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: CardPadding
}

export function Card({
  variant = 'elevated',
  padding = 'md',
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        styles[variant],
        padding === 'none' && styles.padNone,
        padding === 'sm' && styles.padSm,
        padding === 'md' && styles.padMd,
        className,
      )}
      {...props}
    />
  )
}
