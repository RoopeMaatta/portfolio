// src/components/ButtonVariants.tsx
import withButtonProps from './withButtonProps'
import Button, { ButtonProps } from './Button'

// 1. Default Button (no changes)
export default Button

// 2. ButtonSmall (size is set to small by default, but all sizes are allowed except shape "round")
type ButtonSmallProps = Omit<ButtonProps, 'shape'> & {
  shape?: Exclude<ButtonProps['shape'], 'round'>
}

export const ButtonSmall = withButtonProps<ButtonSmallProps>({
  size: 'small',
})

// 3. ButtonIcon (omit the label prop completely so that it can't be used)
export const ButtonIcon = withButtonProps<Omit<ButtonProps, 'label'>, 'label'>({
  buttonStyle: 'text', // Default style
  size: 'regular', // Default size
})
