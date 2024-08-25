import styled from 'styled-components'
import { applyTypographyToCss } from '@utils/typographyUtils'

const TableStyle1Wrapper = styled.div(
  ({ theme }) => `
    grid-column: 1 / -1;
    border-top: ${theme.stroke.default} solid ${theme.colors.stroke.neutral.weak};
    text-align: left;

    table {
      width: 100%;
      border-collapse: collapse;

      th, td {
        padding: ${theme.spacing['008px']};
        border-bottom: ${theme.stroke.default} solid ${theme.colors.stroke.neutral.weak};
      }
      
      th {
        color: ${theme.colors.text.neutral.weak};
        ${applyTypographyToCss(theme.typography.overline)};
        border-bottom: ${theme.stroke.default} solid ${theme.colors.stroke.neutral.weak};
      }
    }
  `
)

export default TableStyle1Wrapper
