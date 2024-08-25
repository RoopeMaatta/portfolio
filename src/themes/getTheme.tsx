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
      '004px': '4px',
      '008px': '8px',
      '012px': '12px',
      '016px': '16px',
      '020px': '20px',
      '024px': '24px',
      '032px': '32px',
      '040px': '40px',
      '048px': '48px',
      '056px': '56px',
      '064px': '64px',
      '080px': '80px',
      '096px': '96px',
      '128px': '128px',
      '256px': '256px',
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
