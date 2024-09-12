import { css } from 'styled-components'

export const interactivePseudoClassStyles = css`
  ${({ theme }) => `

    transition: box-shadow 0.1s ease-in-out;

    &:focus-visible {
      outline: ${theme.stroke.strong} solid ${theme.colors.stroke.brand.strong};
      outline-offset: 2px;
    }

    &:hover::before,
    &:active::before {
      z-index: 1;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      transition: background-color 0.1s;
    }

    &:hover::before {
      background-color: ${theme.colors.fill.state.hover};
    }

    &:hover {
      box-shadow: ${theme.shadow.overlay};
    }

    &:active::before {
      background-color: ${theme.colors.fill.state.press};
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${theme.colors.fill.state.disabled};
      box-shadow: none;

      &:hover::before,
      &:active::before {
        content: none;
        background-color: ${theme.colors.fill.state.disabled};
      }
      &:hover {
        box-shadow: none;
      }
    }
  `}
`
