import styled, { css } from 'styled-components'
import React from 'react'

type CardVariant = 'overlay' | 'raised'

interface PaperProps {
  cardStyle?: CardVariant
  style?: React.CSSProperties
  className?: string
  children?: React.ReactNode
}

const PaperBase = styled.div`
  ${({ theme }) => {
    const { radius } = theme
    return css`
      border-radius: ${radius['12px']};
      position: relative;
      flex-grow: 1;
      max-width: auto;
      height: auto;
    `
  }}
`

const StyledPaperRaised = styled(PaperBase)`
  ${({ theme }) => css`
    box-shadow: ${theme.shadow.raised};
    background-color: ${theme.colors.fill.background.raised};
  `}
`

const StyledPaperOverlay = styled(PaperBase)`
  ${({ theme }) => css`
    box-shadow: ${theme.shadow.overlay};
    background-color: ${theme.colors.fill.background.overlay};
  `}
`

const variantMap = {
  overlay: StyledPaperOverlay,
  raised: StyledPaperRaised,
}

const Paper: React.FC<PaperProps> = ({
  cardStyle = 'raised',
  style,
  className,
  children,
}) => {
  const StyledPaper = variantMap[cardStyle] || StyledPaperRaised

  return (
    <StyledPaper style={style} className={className}>
      {children}
    </StyledPaper>
  )
}

export default Paper
