import { cn } from '@/utils/styles'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  styles?: React.CSSProperties
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

function Button({
  children,
  onClick,
  className = '',
  styles,
  disabled,
  type = 'button'
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn('bg-secondary-hover rounded p-2 font-medium', className)}
      style={styles}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

export  { Button }