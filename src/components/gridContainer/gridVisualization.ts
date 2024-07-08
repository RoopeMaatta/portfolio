import { css } from 'styled-components'

export const getGridBackground = (columns: number) => css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      to right,
      rgba(255, 0, 0, 0.1) 0,
      rgba(255, 0, 0, 0.1) calc(100% / ${columns - 3}),
      transparent calc(100% / ${columns - 3}),
      transparent calc((100% / ${columns - 3}) + 10px)
    );
    pointer-events: none;
    z-index: -1;
  }
`
