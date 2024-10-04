import React from 'react'
import styled from 'styled-components'
import useResponsiveValue from '../../hooks/useResponsiveValue'

const PaddingContainer = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'padding',
})<{ padding: string }>(
  ({ padding }) => `
    padding-left: ${padding};
    padding-right: ${padding};
  `
)

interface PaddingContainerSidesProps {
  children: React.ReactNode // Add children as a prop
}

const PaddingContainerSides: React.FC<PaddingContainerSidesProps> = ({
  children,
}) => {
  const padding = useResponsiveValue(['4vw', '4vw', '6vw'])

  return <PaddingContainer padding={padding}>{children}</PaddingContainer>
}

export default PaddingContainerSides
