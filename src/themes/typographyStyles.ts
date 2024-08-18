const typography = {
  family: {
    primary: 'Figtree, Arial',
  },
  weights: {
    regular: 400,
    bold: 600,
  },
  size: {
    xs: '0.875rem', // 14px
    s: '1rem', // 16px
    m: '1.25rem', // 20px
    l: '1.5rem', // 24px
    xl: '1.75rem', // 28px
    xxl: '2rem', // 32px
    xxxl: '2.25rem', // 36px
    xxxxl: '2.5rem', // 40px
    xxxxxl: '3.5rem', // 56px
  },
  lineheight: {
    xs: '1.25rem', // 20px
    s: '1.5rem', // 24px
    m: '1.75rem', // 28px
    l: '2rem', // 32px
    xl: '2.25rem', // 36px
    xxl: '2.5rem', // 40px
    xxxl: '2.75rem', // 44px
    xxxxl: '3rem', // 48px
    xxxxxl: '4rem', // 64px
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
    xxxxxl: '-0.0150rem',
  },
}

const { family, weights, size, lineheight, letterSpacing } = typography

// Styles object

export const typographyStyles = {
  display: {
    fontFamily: family.primary,
    fontSize: size.xxxxxl,
    fontWeight: weights.bold,
    lineHeight: lineheight.xxxxxl,
    letterSpacing: letterSpacing.xxxxxl,
    textTransform: 'none',
  },
  h1: {
    fontFamily: family.primary,
    fontSize: size.xxxxl,
    fontWeight: weights.bold,
    lineHeight: lineheight.xxxxl,
    letterSpacing: letterSpacing.xxxxl,
    textTransform: 'none',
  },
  h2: {
    fontFamily: family.primary,
    fontSize: size.xxl,
    fontWeight: weights.bold,
    lineHeight: lineheight.xxl,
    letterSpacing: letterSpacing.xxxl,
    textTransform: 'none',
  },
  h3: {
    fontFamily: family.primary,
    fontSize: size.l,
    fontWeight: weights.bold,
    lineHeight: lineheight.l,
    letterSpacing: letterSpacing.xxl,
    textTransform: 'none',
  },
  h4: {
    fontFamily: family.primary,
    fontSize: size.m,
    fontWeight: weights.bold,
    lineHeight: lineheight.m,
    letterSpacing: letterSpacing.xl,
    textTransform: 'none',
  },
  small: {
    fontFamily: family.primary,
    fontSize: size.s,
    fontWeight: weights.regular,
    lineHeight: lineheight.s,
    letterSpacing: letterSpacing.m,
    textTransform: 'none',
  },
  tiny: {
    fontFamily: family.primary,
    fontSize: size.xs,
    fontWeight: weights.regular,
    lineHeight: lineheight.xs,
    letterSpacing: letterSpacing.s,
    textTransform: 'none',
  },
  overline: {
    fontFamily: family.primary,
    fontSize: size.xs,
    fontWeight: weights.bold,
    lineHeight: lineheight.xs,
    letterSpacing: letterSpacing.xxs,
    textTransform: 'uppercase',
  },
} as const

// export type StyleKeys = keyof typeof typographyStyles
