import { cn } from '@/utils/styles'

type InputProps = {
  type?: 'text' | 'password' | 'email' | 'number'
  name?: string
  id?: string
  placeholder?: string
  className?: string
  styles?: React.CSSProperties
  disabled?: boolean
  readonly?: boolean
  value?: string
  autoComplete?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({
  type = 'text',
  name = '',
  id = '',
  placeholder = '',
  className = '',
  styles,
  disabled,
  readonly,
  value,
  autoComplete,
  onChange
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={cn('bg text p-2 rounded', className)}
      style={styles}
      disabled={disabled}
      readOnly={readonly}
      value={value}
      autoComplete={autoComplete}
      onChange={onChange}
    />
  )

}

export { Input }