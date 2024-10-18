import styled, { css } from 'styled-components'
import Paper from 'src/components/Atoms/Paper/Paper'

interface StyledCardProps {
  isHorizontal?: boolean
  gridColumn?: string
}

const StyledCard = styled(Paper)<StyledCardProps>`
  ${({ gridColumn }) => css`
    grid-column: ${gridColumn || 'auto'};
  `}
  display: flex;
  flex-direction: ${({ isHorizontal }) => (isHorizontal ? 'row' : 'column')};
`

const CardImage = styled.img<StyledCardProps>`
  ${({ isHorizontal, theme }) => {
    const { radius } = theme
    return css`
      width: ${isHorizontal ? '150px' : 'auto'};
      height: ${isHorizontal ? 'auto' : '150px'};
      object-fit: cover;
      border-top-left-radius: ${radius['12px']};
      border-top-right-radius: ${isHorizontal ? '0' : radius['12px']};
      border-bottom-left-radius: ${isHorizontal ? radius['12px'] : '0'};
      border-bottom-right-radius: ${isHorizontal ? '0' : radius['12px']};
      flex-shrink: 0;
    `
  }}
`

const CardContentWrapper = styled.div<StyledCardProps>`
  ${({ isHorizontal, theme }) => {
    const { spacing } = theme
    return css`
      display: flex;
      flex-direction: column;
      padding: ${spacing['024px']};
      ${isHorizontal &&
      css`
        flex: 1;
      `}
    `
  }}
`

const IconWrapper = styled.div`
  margin-bottom: 16px;
`

export { StyledCard, CardImage, CardContentWrapper, IconWrapper }
