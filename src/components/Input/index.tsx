import { cn } from '@/utils/styles'

type InputProps = {
  type?: 'text' | 'password' | 'email' | 'number'
  name?: string
  placeholder?: string
  className?: string
  styles?: React.CSSProperties
  disabled?: boolean
  readonly?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({
  type = 'text',
  name = '',
  placeholder = '',
  className = '',
  styles,
  disabled,
  readonly,
  value,
  onChange
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={cn('bg text p-2 rounded', className)}
      style={styles}
      disabled={disabled}
      readOnly={readonly}
      value={value}
      onChange={onChange}
    />
  )

}

export { Input }