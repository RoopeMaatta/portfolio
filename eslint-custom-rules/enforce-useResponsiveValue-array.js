import breakpoints from '../src/themes/breakpoints.json' assert { type: 'json' }

const expectedArrayLength = Object.keys(breakpoints).length

export default {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Enforce that `useResponsiveValue` is given an array of length matching the number of breakpoints.',
    },
    fixable: null, // or 'code' if you plan to provide automatic fixes
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === 'Identifier' &&
          node.callee.name === 'useResponsiveValue'
        ) {
          if (
            node.arguments.length === 1 &&
            node.arguments[0].type === 'ArrayExpression'
          ) {
            const arrayLength = node.arguments[0].elements.length

            if (arrayLength !== expectedArrayLength) {
              context.report({
                node,
                message: `Array length passed to useResponsiveValue should be ${expectedArrayLength}, but got ${arrayLength}.`,
              })
            }
          } else {
            context.report({
              node,
              message:
                'useResponsiveValue must be called with an array argument.',
            })
          }
        }
      },
    }
  },
}
