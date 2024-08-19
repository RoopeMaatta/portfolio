import { getTypography } from './typography'
import breakpoints from './breakpoints.json'
import { getColors } from './colors'

export const getTheme = (isDarkMode: boolean, isSmallScreen: boolean) => {
  const typography = getTypography(isSmallScreen)
  const colors = getColors(isDarkMode)

  // Theme
  return {
    colors,

    typography,

    breakpoints,

    stroke: {
      default: '0.5px',
      strong: '1px',
    },

    spacing: {
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      32: '32px',
      40: '40px',
      48: '48px',
      56: '56px',
      64: '64px',
      80: '80px',
      96: '96px',
      128: '128px',
      256: '256px',
    },

    radius: {
      4: '4px',
      8: '8px',
      16: '16px',
      24: '24px',
      32: '32px',
    },

    shadow: {
      raised:
        '0 2px 4px 0 rgba(0, 18, 38, 8%), 0 0px 1px 0 rgba(0, 18, 38, 16%)',
      overlay:
        '0 4px 12px 0 rgba(0, 18, 38, 16%), 0 0px 1px 0 rgba(0, 18, 38, 16%)',
    },
  }
}

export type Theme = ReturnType<typeof getTheme>
