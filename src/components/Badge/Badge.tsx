import clsx from 'clsx'
import type { HTMLAttributes } from 'react'
import styles from './Badge.module.css'

export type BadgeVariant = 'neutral' | 'success' | 'warning' | 'danger'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

export function Badge({
  variant = 'neutral',
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(styles.badge, styles[variant], className)}
      {...props}
    />
  )
}
