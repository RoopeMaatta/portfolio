import { createGlobalStyle } from 'styled-components'
import { applyTypographyToCss } from '@utils/typographyUtils'

const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
    body {
      margin: 0;
      padding: 0;
      font-smooth: always;
      background-color: ${theme.colors.fill.background.base};
      color: ${theme.colors.text.neutral.strong};
      ${applyTypographyToCss(theme.typography.small)};
    }
    
    p, h1, h2, h3, h4, small, ul {
      margin: 0;
    }

    p {
      ${applyTypographyToCss(theme.typography.small)};
    }

    h1 {
      ${applyTypographyToCss(theme.typography.h1)};
    }

    h2 {
      ${applyTypographyToCss(theme.typography.h2)};
    }

    h3 {
      ${applyTypographyToCss(theme.typography.h3)};
    }

    h4 {
      ${applyTypographyToCss(theme.typography.h4)};
    }

    small {
      ${applyTypographyToCss(theme.typography.tiny)};
    }


    /* Classes */
    .overline {
      ${applyTypographyToCss(theme.typography.overline)};
    }
  `
)

export default GlobalStyle
