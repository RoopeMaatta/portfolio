// src/components/withButtonProps.tsx
import React from 'react'
import ButtonMaster, { ButtonProps } from './ButtonMaster'

const withButtonProps = <
  P extends Partial<ButtonProps>,
  ExcludedProps extends keyof ButtonProps = never,
>(
  defaultProps: P
) => {
  const WrappedButton = React.forwardRef<
    HTMLButtonElement,
    Omit<ButtonProps, ExcludedProps> & P
  >((props, ref) => {
    return <ButtonMaster ref={ref} {...defaultProps} {...props} />
  })

  // Set the display name for easier debugging
  WrappedButton.displayName = `withButtonProps(${ButtonMaster.displayName || 'Button'})`

  return WrappedButton
}

export default withButtonProps
