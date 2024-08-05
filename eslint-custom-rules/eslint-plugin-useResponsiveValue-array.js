/**
 * @fileoverview Example of an ESLint plugin with a custom rule for useResponsiveValue.
 */
'use strict'

import useResponsiveValueArrayRule from './enforce-useResponsiveValue-array.js'

const plugin = {
  rules: {
    'enforce-useResponsiveValue-array': useResponsiveValueArrayRule,
  },
}

export default plugin
