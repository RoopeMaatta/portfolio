import React from 'react'
import styled, { css } from 'styled-components'

// Styled component for the placeholder container
const PlaceholderContainer = styled.div`
  ${({ theme }) => {
    const { colors, spacing, radius, typography } = theme

    return css`
      ${typography.tiny}
      display: flex;
      justify-content: center;
      align-items: center;
      padding: ${spacing['016px']};
      background-color: ${colors.fill.neutral.weak};
      border: 2px dotted ${colors.stroke.neutral.strong};
      color: ${colors.text.neutral.weak};
      border-radius: ${radius['08px']};
    `
  }}
`

const PlaceholderComponent: React.FC = () => {
  return (
    <PlaceholderContainer>
      Swap with another component or set to {'{false}'}
    </PlaceholderContainer>
  )
}

export default PlaceholderComponent
