export const getTheme = (isDarkMode: boolean) => {
  const D = isDarkMode

  const palette = {
    neutral: {
      100: D ? 'hwb(0 0 100%)' : 'hwb(212 100 15% / 90%)',
      70: D ? 'hwb(0 0 100% / 78%)' : 'hwb(212 100 20% / 65%)',
      50: D ? 'hwb(0 0 100% / 60%)' : 'hwb(212 100 30% / 45%)',
      10: D ? 'hwb(0 0 100% / 12%)' : 'hwb(212 100 40% / 8%)',
      5: D ? 'hwb(0 0 100% / 6%)' : 'hwb(212 100 50% / 4%)',
    },
    brand: {},
    red: {},
    amber: {},
    green: {},
  }

  const { neutral, brand, red, amber, green } = palette

  const typography = {
    family: {
      primary: 'Figtree',
    },
    weights: {
      regular: 400,
      bold: 600,
    },
    size: {
      xxs: '0.75rem',
      xs: '0.875rem',
      s: '0.9375rem',
      m: '1.0625rem',
      l: '1.25rem',
      xl: '1.375rem',
      xxl: '1.625rem',
      xxxl: '2rem',
      xxxxl: '2.25rem',
    },
    lineheight: {
      xxs: '1rem',
      xs: '1rem',
      s: '1.5rem',
      m: '1.5rem',
      l: '1.5rem',
      xl: '1.75rem',
      xxl: '2rem',
      xxxl: '2.5rem',
      xxxxl: '2.75rem',
    },
    letterSpacing: {
      xxs: '0.03rem',
      xs: '0rem',
      s: '0rem',
      m: '0rem',
      l: '-0.00125rem',
      xl: '-0.00138rem',
      xxl: '-0.00325',
      xxxl: '-0.006rem',
      xxxxl: '-0.0125rem',
    },
  }

  const { family, weights, size, lineheight, letterSpacing } = typography

  return {
    // Color palette
    colors: {
      text: {
        neutral: {
          strong: neutral[100],
          weak: neutral[70],
        },
        brand: {},
        error: {},
        warning: {},
        succees: {},
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
        base: D ? 'hwb(212 30 10%)' : 'hwb(0 0 100%)',
        raised: D ? 'hwb(212 25 15%)' : 'hwb(0 0 100%)',
        overlay: D ? 'hwb(212 20 20%)' : 'hwb(0 0 100%)',
      },
    },

    type: {
      h1: {
        fontFamily: family.primary,
        fontSize: size.xxxxl,
        fontStyle: 'normal',
        fontWeight: weights.bold,
        lineHeight: lineheight.xxxxl,
        letterSpacing: letterSpacing.xxxxl,
      },
      h2: {
        fontFamily: family.primary,
        fontSize: size.xxxl,
        fontStyle: 'normal',
        fontWeight: weights.bold,
        lineHeight: lineheight.xxxl,
        letterSpacing: letterSpacing.xxxl,
      },
      h3: {
        fontFamily: family.primary,
        fontSize: size.xxl,
        fontStyle: 'normal',
        fontWeight: weights.bold,
        lineHeight: lineheight.xxl,
        letterSpacing: letterSpacing.xxl,
      },
      h4: {
        fontFamily: family.primary,
        fontSize: size.xl,
        fontStyle: 'normal',
        fontWeight: weights.bold,
        lineHeight: lineheight.xl,
        letterSpacing: letterSpacing.xl,
      },
      h5: {
        fontFamily: family.primary,
        fontSize: size.l,
        fontStyle: 'normal',
        fontWeight: weights.bold,
        lineHeight: lineheight.l,
        letterSpacing: letterSpacing.l,
      },
      body: {
        fontFamily: family.primary,
        fontSize: size.m,
        fontStyle: 'normal',
        fontWeight: weights.regular,
        lineHeight: lineheight.m,
        letterSpacing: letterSpacing.m,
      },
      bodyBold: {
        fontFamily: family.primary,
        fontSize: size.m,
        fontStyle: 'normal',
        fontWeight: weights.bold,
        lineHeight: lineheight.m,
        letterSpacing: letterSpacing.m,
      },
      small: {
        fontFamily: family.primary,
        fontSize: size.s,
        fontStyle: 'normal',
        fontWeight: weights.regular,
        lineHeight: lineheight.s,
        letterSpacing: letterSpacing.s,
      },
      smallBold: {
        fontFamily: family.primary,
        fontSize: size.s,
        fontStyle: 'normal',
        fontWeight: weights.bold,
        lineHeight: lineheight.s,
        letterSpacing: letterSpacing.s,
      },
      caption: {
        fontFamily: family.primary,
        fontSize: size.xs,
        fontStyle: 'normal',
        fontWeight: weights.regular,
        lineHeight: lineheight.xs,
        letterSpacing: letterSpacing.xs,
      },
      overline: {
        fontFamily: family.primary,
        fontSize: size.xxs,
        fontStyle: 'normal',
        fontWeight: weights.bold,
        lineHeight: lineheight.xxs,
        letterSpacing: letterSpacing.xxs,
        textTransform: 'uppercase', //Fix this to work upperkase
      },
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
