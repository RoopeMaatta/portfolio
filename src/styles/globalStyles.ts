import { createGlobalStyle } from 'styled-components'
import { applyTypographyToCss } from '@utils/typographyUtils'

const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
    body {
      margin: 0;
      padding: 0;
      background-color: ${theme.colors.fill.background.base};
      color: ${theme.colors.text.neutral.strong};
      ${applyTypographyToCss(theme.typography.body)};
    }

    p {
      ${applyTypographyToCss(theme.typography.body)};
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

    h5 {
      ${applyTypographyToCss(theme.typography.h5)};
    }

    small {
      ${applyTypographyToCss(theme.typography.small)};
    }

    caption, figcaption {
      ${applyTypographyToCss(theme.typography.caption)};
    }


    /* Classes */
    .overline {
      ${applyTypographyToCss(theme.typography.overline)};
    }
  `
)

export default GlobalStyle
