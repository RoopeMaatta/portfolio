/**
 * @fileoverview Tests for useResponsiveValue rule.
 */

const { RuleTester } = require('eslint');
const useResponsiveValueRule = require('./use-responsive-value-rule');

// Mock theme setup
const mockTheme = {
  breakpoints: {
    s: {
      minScreenWidth: 0,
      columns: 4,
      gridGap: 16,
    },
    m: {
      minScreenWidth: 600,
      columns: 8,
      gridGap: 24,
    },
    l: {
      minScreenWidth: 900,
      columns: 12,
      gridGap: 32,
    },
  },
};

// Override the getTheme function to return the mock theme
jest.mock('../src/themes/getTheme', () => ({
  getTheme: jest.fn(() => mockTheme),
}));

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module', // Allows for ES module syntax
  },
});

ruleTester.run('use-responsive-value', useResponsiveValueRule, {
  valid: [
    {
      code: `
        import { useResponsiveValue } from './path/to/hook';
        const value = useResponsiveValue([1, 2, 3]);
      `,
    },
    {
      code: `
        import { useResponsiveValue } from './path/to/hook';
        const value = useResponsiveValue(['a', 'b', 'c']);
      `,
    },
  ],
  invalid: [
    {
      code: `
        import { useResponsiveValue } from './path/to/hook';
        const value = useResponsiveValue([1, 2]);
      `,
      errors: [
        {
          message: 'The number of values provided (2) does not match the number of breakpoints (3).',
        },
      ],
    },
    {
      code: `
        import { useResponsiveValue } from './path/to/hook';
        const value = useResponsiveValue([1, 2, 3, 4]);
      `,
      errors: [
        {
          message: 'The number of values provided (4) does not match the number of breakpoints (3).',
        },
      ],
    },
  ],
});

console.log('All tests passed!');
