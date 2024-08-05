/**
 * @fileoverview Rule to enforce that `useResponsiveValue` receives an array with a length equal to the number of breakpoints in the theme.
 */

import { getTheme } from '../src/themes/getTheme'

const theme = getTheme(false) // or getTheme(true) based on your preference
const breakpointsCount = Object.keys(theme.breakpoints).length

// The useResponsiveValue rule definition
export default {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Enforce that `useResponsiveValue` receives an array with a length equal to the number of breakpoints in the theme.',
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.name === 'useResponsiveValue' &&
          node.arguments.length > 0 &&
          node.arguments[0].type === 'ArrayExpression'
        ) {
          const valuesLength = node.arguments[0].elements.length

          if (valuesLength !== breakpointsCount) {
            context.report({
              node: node.arguments[0],
              message:
                'The number of values provided ({{ valuesLength }}) does not match the number of breakpoints ({{ breakpointsCount }}).',
              data: {
                valuesLength,
                breakpointsCount,
              },
            })
          }
        }
      },
    }
  },
}
