import { cn } from '@/utils/styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  styles?: React.CSSProperties
  className?: string
}

function Input({
  type = 'text',
  className = '',
  styles,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      className={cn('bg text p-2 rounded', className)}
      style={styles}
      {...props}
    />
  )

}

export { Input }