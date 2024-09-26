// src/components/withButtonProps.tsx
import React from 'react'
import ButtonMaster, { ButtonProps } from './ButtonMaster'

// Modify the HOC to accept an additional generic for excluded props
const withButtonProps = <
  P extends Partial<ButtonProps>,
  ExcludedProps extends keyof ButtonProps = never,
>(
  defaultProps: P
) => {
  const WrappedButton = (props: Omit<ButtonProps, ExcludedProps> & P) => {
    return <ButtonMaster {...defaultProps} {...props} />
  }

  // Set the display name for easier debugging
  WrappedButton.displayName = `withButtonProps(${ButtonMaster.displayName || 'Button'})`

  return WrappedButton
}

export default withButtonProps
