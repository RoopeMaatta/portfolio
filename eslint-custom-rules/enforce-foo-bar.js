/**
 * @fileoverview Rule to enforce that `useResponsiveValue` is given an array of correct length.
 */

// The enforce-useResponsiveValue-array rule definition
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
    const expectedArrayLength = 3 // Hardcoded number of breakpoints

    return {
      // Performs action on every call expression
      CallExpression(node) {
        // Check if the function name is `useResponsiveValue`
        if (
          node.callee.type === 'Identifier' &&
          node.callee.name === 'useResponsiveValue'
        ) {
          // Check if the argument is an array
          if (
            node.arguments.length === 1 &&
            node.arguments[0].type === 'ArrayExpression'
          ) {
            const arrayLength = node.arguments[0].elements.length

            // Check if array length matches the expected length
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
