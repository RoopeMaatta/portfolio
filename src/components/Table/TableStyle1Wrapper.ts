import styled from 'styled-components'
import { applyTypographyToCss } from '@utils/typographyUtils'

const TableStyle1Wrapper = styled.div(
  ({ theme }) => `
    grid-column: 1 / -1;
    border-top: ${theme.stroke.default} solid ${theme.colors.stroke.neutral.weak};

    table {
      width: 100%;
      border-collapse: collapse;

      th, td {
        padding: ${theme.spacing.xs};
        border-bottom: ${theme.stroke.default} solid ${theme.colors.stroke.neutral.weak};
      }
      
      th {
        color: ${theme.colors.text.neutral.weak};
        ${applyTypographyToCss(theme.typography.caption)};
        border-bottom: ${theme.stroke.default} solid ${theme.colors.stroke.neutral.weak};
      }
    }
  `
)

export default TableStyle1Wrapper
