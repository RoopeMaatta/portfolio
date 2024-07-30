import { typographyStyles } from './typographyStyles'

export const getTheme = (isDarkMode: boolean) => {
  const D = isDarkMode

  const palette = {
    neutral: {
      100: D ? 'hsl(0 0% 100%)' : 'hsl(212 100% 8% / 90%)',
      70: D ? 'hsl(0 0% 100% / 78%)' : 'hsl(212 100% 10% / 65%)',
      50: D ? 'hsl(0 0% 100% / 60%)' : 'hsl(212 100% 15% / 45%)',
      10: D ? 'hsl(0 0% 100% / 12%)' : 'hsl(212 100% 20% / 8%)',
      5: D ? 'hsl(0 0% 100% / 6%)' : 'hsl(212 100% 25% / 4%)',
      inverted100: D ? 'hsl(212 100% 8% / 90%)' : 'hsl(0 0% 100%)',
    },
    brand: {
      100: D ? 'hsl(212 100% 71% / 100%)' : 'hsl(212 100% 45% / 100%)',
      80: D ? 'hsl(212 100% 71% / 80%)' : 'hsl(212 100% 45% / 80%)',
      20: D ? 'hsl(212 100% 71% / 20%)' : 'hsl(212 100% 45% / 20%)',
      5: D ? 'hsl(212 100% 71% / 5%)' : 'hsl(212 100% 45% / 5%)',
    },
    red: {},
    amber: {},
    green: {},
  }

  // deconstruct for easier use
  const { neutral, brand } = palette // , brand, red, amber, green
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    body,
    bodyBold,
    small,
    smallBold,
    caption,
    overline,
  } = typographyStyles

  // Theme
  return {
    colors: {
      text: {
        neutral: {
          strong: neutral[100],
          weak: neutral[70],
          invert: neutral.inverted100,
        },
        brand: {
          strong: brand[100],
        },
        // error: {},
        // warning: {},
        // succes: {},
      },
      stroke: {
        neutral: {
          strong: neutral[50],
          weak: neutral[10],
        },
        brand: {
          strong: brand[80],
          weak: brand[20],
        },
      },
      fill: {
        neutral: {
          strong: neutral[100],
          weak: neutral[5],
        },
        background: {
          base: D ? 'hsl(212 18% 9%)' : 'hsl(0 0% 100%)',
          raised: D ? 'hsl(212 14% 13%)' : 'hsl(0 0% 100%)',
          overlay: D ? 'hsl(212 11% 18%)' : 'hsl(0 0% 100%)',
        },
        state: {
          hover: neutral[5],
          press: neutral[10],
          disabled: neutral[10],
        },
        brand: {
          strong: brand[100],
          weak: brand[5],
        },
      },
    },

    typography: {
      h1,
      h2,
      h3,
      h4,
      h5,
      body,
      bodyBold,
      small,
      smallBold,
      caption,
      overline,
    },

    stroke: {
      default: '0.5px',
      strong: '1px',
    },

    spacing: {
      xxs: '4px',
      xs: '8px',
      s: '12px',
      m: '16px',
      l: '24px',
      xl: '32px',
      xxl: '48px',
      xxxl: '80px',
    },

    radius: {
      xs: '4px',
      s: '8px',
      m: '16px',
      l: '24px',
      xl: '32px',
    },

    shadow: {
      raised:
        '0 2px 4px 0 rgba(0, 18, 38, 8%), 0 0px 1px 0 rgba(0, 18, 38, 16%)',
      overlay:
        '0 4px 12px 0 rgba(0, 18, 38, 16%), 0 0px 1px 0 rgba(0, 18, 38, 16%)',
    },

    breakpoints: [
      {
        minWidthBreakpoint: 0,
        columns: 4,
        gridGap: 16,
      },
      {
        minWidthBreakpoint: 600,
        columns: 8,
        gridGap: 24,
      },
      {
        minWidthBreakpoint: 900,
        columns: 12,
        gridGap: 32,
      },
    ],
  }
}

export type Theme = ReturnType<typeof getTheme>
