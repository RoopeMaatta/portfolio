/**
 * @fileoverview Example of an ESLint plugin with a custom rule.
 * @author Ben Perlmutter
 */
'use strict'

import fooBarRule from './enforce-foo-bar.js'
const plugin = { rules: { 'enforce-foo-bar': fooBarRule } }
export default plugin
