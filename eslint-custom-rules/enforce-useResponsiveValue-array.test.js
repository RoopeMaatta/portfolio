/**
 * @fileoverview Tests for enforce-useResponsiveValue-array.js rule.
 */

import { RuleTester } from 'eslint'
import useResponsiveValueArrayRule from './enforce-useResponsiveValue-array.js'

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2020, // Use a modern version to support recent JavaScript features
    sourceType: 'module',
  },
})

ruleTester.run(
  'enforce-useResponsiveValue-array', // rule name
  useResponsiveValueArrayRule, // rule code
  {
    valid: [
      {
        code: "const value = useResponsiveValue(['value1', 'value2', 'value3']);",
      },
      {
        code: 'const value = useResponsiveValue([1, 2, 3]);',
      },
    ],
    invalid: [
      {
        code: "const value = useResponsiveValue(['value1', 'value2']);",
        errors: [
          {
            message:
              'Array length passed to useResponsiveValue should be 3, but got 2.',
          },
        ],
      },
      {
        code: "const value = useResponsiveValue(['value1', 'value2', 'value3', 'value4']);",
        errors: [
          {
            message:
              'Array length passed to useResponsiveValue should be 3, but got 4.',
          },
        ],
      },
      {
        code: "const value = useResponsiveValue('not an array');",
        errors: [
          {
            message:
              'useResponsiveValue must be called with an array argument.',
          },
        ],
      },
    ],
  }
)

console.log('All tests passed!')
