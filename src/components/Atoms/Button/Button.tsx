// src/components/ButtonVariants.tsx
import withButtonProps from './withButtonProps'
import Button, { ButtonProps } from './ButtonMaster'

// 1. Default ButtonMaster
export default Button

// 2. ButtonSmall
type ButtonSmallProps = Omit<ButtonProps, 'shape'> & {
  shape?: Exclude<ButtonProps['shape'], 'round'>
}

export const ButtonSmall = withButtonProps<ButtonSmallProps>({
  size: 'small',
})

// 3. ButtonIcon (omit label, iconPosition, and fullWidth)
export const ButtonIcon = withButtonProps<
  Omit<ButtonProps, 'label' | 'iconPosition' | 'fullWidth'>,
  'label' | 'iconPosition' | 'fullWidth'
>({
  buttonStyle: 'clear',
  size: 'regular',
})
