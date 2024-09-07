import { cn } from '@/utils/styles'

interface ErrorFormProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  styles?: React.CSSProperties
  className?: string
}

function ErrorForm({
  children,
  styles,
  className = '',
  ...props
}: ErrorFormProps){
  return (
    <span
      className={cn('mt-1 text-xs text-red-400', className)}
      style={styles}
      {...props}
    >
      {children}
    </span>
  )
}

export { ErrorForm }