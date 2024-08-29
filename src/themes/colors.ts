export const getColors = (isDarkMode: boolean) => {
  const D = isDarkMode

  const palette = {
    neutral: {
      100: D ? 'hsl(0 0% 100% / 100%)' : 'hsl(212 100% 15% / 90%)',
      70: D ? 'hsl(0 0% 100% / 78%)' : 'hsl(212 100% 20% / 65%)',
      50: D ? 'hsl(0 0% 100% / 60%)' : 'hsl(212 100% 30% / 45%)',
      10: D ? 'hsl(0 0% 100% / 12%)' : 'hsl(212 100% 40% / 10%)',
      5: D ? 'hsl(0 0% 100% / 6%)' : 'hsl(212 100% 50% / 4%)',
      2: D ? 'hsl(0 0% 100% / 3%)' : 'hsl(212 100% 50% / 2%)',
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

  const { neutral, brand } = palette

  return {
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
  } as const
}
