// src/components/ButtonVariants.tsx
import withButtonProps from './withButtonProps'
import { ButtonProps } from './ButtonMaster'

// Default ButtonMaster
const Button = withButtonProps<
  Omit<ButtonProps, 'children' | 'useAsContainer'>,
  'children' | 'useAsContainer'
>({})

export const ButtonContainer = withButtonProps<
  Omit<ButtonProps, 'label' | 'iconPosition' | 'fullWidth' | 'icon' | 'size'>,
  'label' | 'iconPosition' | 'fullWidth' | 'icon' | 'size'
>({
  buttonStyle: 'clear',
  useAsContainer: true,
})

export const ButtonIcon = withButtonProps<
  Omit<
    ButtonProps,
    'label' | 'iconPosition' | 'fullWidth' | 'children' | 'useAsContainer'
  >,
  'label' | 'iconPosition' | 'fullWidth' | 'children' | 'useAsContainer'
>({
  buttonStyle: 'clear',
  size: 'regular',
})

export default Button
