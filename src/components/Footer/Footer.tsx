import clsx from 'clsx'
import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from 'react'
import styles from './Footer.module.css'

export type FooterVariant = 'default' | 'subtle' | 'minimal'

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  variant?: FooterVariant
  children?: ReactNode
}

export function Footer({
  variant = 'default',
  className,
  children,
  ...props
}: FooterProps) {
  return (
    <footer
      className={clsx(styles.footer, styles[variant], className)}
      {...props}
    >
      <div className={styles.inner}>{children}</div>
    </footer>
  )
}

export function FooterCode({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return <code className={clsx(styles.code, className)} {...props} />
}

export function FooterLink({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={clsx(styles.link, className)} {...props} />
}
