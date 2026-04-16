import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import type { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

export type InputSize = 'sm' | 'md'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  inputSize?: InputSize
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      label,
      hint,
      error,
      inputSize = 'md',
      className,
      id,
      disabled,
      ...props
    },
    ref,
  ) {
    const uid = useId()
    const inputId = id ?? props.name ?? uid
    const stateError = Boolean(error)

    return (
      <div className={styles.field}>
        {label ? (
          <label className={styles.label} htmlFor={inputId}>
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={stateError || undefined}
          aria-describedby={
            [hint && `${inputId}-hint`, error && `${inputId}-err`]
              .filter(Boolean)
              .join(' ') || undefined
          }
          className={clsx(
            styles.input,
            inputSize === 'sm' && styles.sizeSm,
            inputSize === 'md' && styles.sizeMd,
            stateError && styles.stateError,
            className,
          )}
          {...props}
        />
        {hint && !error ? (
          <span id={`${inputId}-hint`} className={styles.hint}>
            {hint}
          </span>
        ) : null}
        {error ? (
          <span id={`${inputId}-err`} role="alert" className={styles.errorText}>
            {error}
          </span>
        ) : null}
      </div>
    )
  },
)
