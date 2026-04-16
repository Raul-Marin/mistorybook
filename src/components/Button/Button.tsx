import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        styles[variant],
        size === 'sm' && styles.sizeSm,
        size === 'md' && styles.sizeMd,
        size === 'lg' && styles.sizeLg,
        className,
      )}
      {...props}
    />
  )
}
