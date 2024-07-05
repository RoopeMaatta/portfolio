import { typographyStyles } from './typographyStyles'

export const getTheme = (isDarkMode: boolean) => {
  const D = isDarkMode

  const palette = {
    neutral: {
      100: D ? 'hwb(0 0% 100%)' : 'hwb(212 100% 15% / 90%)',
      70: D ? 'hwb(0 0% 100% / 78%)' : 'hwb(212 100% 20% / 65%)',
      50: D ? 'hwb(0 0% 100% / 60%)' : 'hwb(212 100% 30% / 45%)',
      10: D ? 'hwb(0 0% 100% / 12%)' : 'hwb(212 100% 40% / 8%)',
      5: D ? 'hwb(0 0% 100% / 6%)' : 'hwb(212 100% 50% / 4%)',
    },
    brand: {},
    red: {},
    amber: {},
    green: {},
  }

  // deconstruct for easier use
  const { neutral } = palette // , brand, red, amber, green
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
        },
        // brand: {},
        // error: {},
        // warning: {},
        // succes: {},
      },
      stroke: {
        neutral: {
          strong: neutral[50],
          weak: neutral[10],
        },
      },
      fill: {
        neutral: {
          strong: neutral[100],
          weak: neutral[5],
        },
      },
      background: {
        base: D ? 'hwb(212 30% 10%)' : 'hwb(0 0% 100%)',
        raised: D ? 'hwb(212 25% 15%)' : 'hwb(0 0% 100%)',
        overlay: D ? 'hwb(212 20% 20%)' : 'hwb(0 0% 100%)',
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
  }
}

export type Theme = ReturnType<typeof getTheme>
