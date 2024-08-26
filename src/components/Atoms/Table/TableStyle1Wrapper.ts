import styled from 'styled-components'
import { applyTypographyToCss } from '@utils/typographyUtils'
import useResponsiveValue from '../../../hooks/useResponsiveValue'

const TableStyle1Wrapper = styled.div(({ theme }) => {
  const isSmallScreen = useResponsiveValue([true, false, false])

  return `
    grid-column: 1 / -1;
    border-top: ${theme.stroke.default} solid ${theme.colors.stroke.neutral.weak};
    text-align: left;
    width: 100%;
    overflow-x: ${isSmallScreen ? 'auto' : 'unset'};

    table {
      width: 100%;
      border-collapse: collapse;

      th, td {
        padding: ${theme.spacing['008px']};
        border-bottom: ${theme.stroke.default} solid ${theme.colors.stroke.neutral.weak};
        min-width: ${isSmallScreen ? '250px' : 'unset'};
      }
      
      th {
        color: ${theme.colors.text.neutral.weak};
        ${applyTypographyToCss(theme.typography.overline)};
      }
    }
    `
})

export default TableStyle1Wrapper
