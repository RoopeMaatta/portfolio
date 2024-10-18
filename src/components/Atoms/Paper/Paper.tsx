import styled, { css } from 'styled-components'
import React from 'react'

type CardVariant = 'overlay' | 'raised'

interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  cardStyle?: CardVariant
  hoverStyle?: CardVariant
}

const Paper = styled.div<PaperProps>`
  ${({ theme, cardStyle = 'raised', hoverStyle = cardStyle }) => css`
    border-radius: ${theme.radius['12px']};
    position: relative;
    flex-grow: 1;
    max-width: auto;
    height: auto;
    box-shadow: ${theme.shadow[cardStyle]};
    background-color: ${theme.colors.fill.background[cardStyle]};
    transition:
      box-shadow 0.3s ease,
      background-color 0.3s ease;

    &:hover {
      box-shadow: ${theme.shadow[hoverStyle]};
      background-color: ${theme.colors.fill.background[hoverStyle]};
    }
  `}
`

export default Paper
