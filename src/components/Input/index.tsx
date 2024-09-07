import { forwardRef } from 'react'
import { cn } from '@/utils/styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  styles?: React.CSSProperties
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    type = 'text',
    className = '',
    styles,
    ...props
  }, ref) => {
    return (
      <input
        type={type}
        className={cn('bg text p-2 rounded', className)}
        style={styles}
        ref={ref}
        {...props}
      />
    )
  })

export { Input }