// import styled from 'styled-components'
// import { styles, StyleKeys } from './typographyStyles'

// // Map each style key to an HTML tag
// const tagMap: Record<StyleKeys, keyof JSX.IntrinsicElements> = {
//   h1: 'h1',
//   h2: 'h2',
//   h3: 'h3',
//   h4: 'h4',
//   h5: 'h5',
//   body: 'p',
//   bodyBold: 'p',
//   small: 'small',
//   smallBold: 'small',
//   caption: 'span',
//   overline: 'span',
// }

// // Define the style type
// type Style = {
//   fontFamily: string
//   fontSize: string
//   fontWeight: number
//   lineHeight: string
//   letterSpacing: string
//   textTransform: string
// }

// // Create a styled component based on the provided style key
// const createStyledComponent = (styleKey: StyleKeys) => {
//   const style: Style = styles[styleKey]
//   const tag = tagMap[styleKey]

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   return (styled as any)[tag]`
//     font-family: ${style.fontFamily};
//     font-size: ${style.fontSize};
//     font-weight: ${style.fontWeight};
//     line-height: ${style.lineHeight};
//     letter-spacing: ${style.letterSpacing};
//     text-transform: ${style.textTransform};
//   ` as ReturnType<typeof styled.div>
// }

// // Export each styled component
// export const H1 = createStyledComponent('h1')
// export const H2 = createStyledComponent('h2')
// export const H3 = createStyledComponent('h3')
// export const H4 = createStyledComponent('h4')
// export const H5 = createStyledComponent('h5')
// export const Body = createStyledComponent('body')
// export const BodyBold = createStyledComponent('bodyBold')
// export const Small = createStyledComponent('small')
// export const SmallBold = createStyledComponent('smallBold')
// export const Caption = createStyledComponent('caption')
// export const Overline = createStyledComponent('overline')
