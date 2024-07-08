import styled, { css } from 'styled-components'
import { memo } from 'react'

interface GridContainerProps {
  showGrid?: boolean
  gridGap: number
}

const getGridBackground = (columns: number, gap: number) => css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + ${gap}px);
    height: 100%;
    background-image: repeating-linear-gradient(
      to right,
      rgba(255, 0, 0, 0.1) 0,
      rgba(255, 0, 0, 0.1) calc((100% / ${columns}) - ${gap}px),
      transparent calc((100% / ${columns}) - ${gap}px),
      transparent calc(100% / ${columns})
    );
    pointer-events: none;
    z-index: -1;
  }
`

enum MediaQueries {
  Desktop = 12,
  Tablet = 8,
  Mobile = 4,
}

export const GridContainer = memo(styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${MediaQueries.Desktop}, 1fr);
  grid-gap: ${({ gridGap }) => gridGap}px; // Use the prop for grid gap
  position: relative;
  margin: 0 auto;

  ${({ showGrid, gridGap }) =>
    showGrid && getGridBackground(MediaQueries.Desktop, gridGap)}

  @media (max-width: 899px) {
    grid-template-columns: repeat(${MediaQueries.Tablet}, 1fr);
    ${({ showGrid, gridGap }) =>
      showGrid && getGridBackground(MediaQueries.Tablet, gridGap)}
  }

  @media (max-width: 599px) {
    grid-template-columns: repeat(${MediaQueries.Mobile}, 1fr);
    ${({ showGrid, gridGap }) =>
      showGrid && getGridBackground(MediaQueries.Mobile, gridGap)}
  }
`)
