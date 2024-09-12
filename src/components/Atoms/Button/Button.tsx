// src/components/ButtonVariants.tsx
import withButtonProps from './withButtonProps'
import Button, { ButtonProps } from './ButtonMaster'

// Default ButtonMaster
export default Button

// type ButtonSmallProps = Omit<ButtonProps, 'shape'> & {
//   shape?: Exclude<ButtonProps['shape'], 'round'>
// }

// export const ButtonSmall = withButtonProps<ButtonSmallProps>({
//   size: 'small',
// })

export const ButtonContainer = withButtonProps<
  Omit<ButtonProps, 'label' | 'iconPosition' | 'fullWidth' | 'icon' | 'size'>,
  'label' | 'iconPosition' | 'fullWidth' | 'icon' | 'size'
>({
  buttonStyle: 'clear',
})

export const ButtonIcon = withButtonProps<
  Omit<ButtonProps, 'label' | 'iconPosition' | 'fullWidth'>,
  'label' | 'iconPosition' | 'fullWidth'
>({
  buttonStyle: 'clear',
  size: 'regular',
})
