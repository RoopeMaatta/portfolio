import React from 'react'
import styled, { css } from 'styled-components'
import { Spacer } from '../Atoms/Spacer'
import PaddingContainerSides from '../Atoms/PaddingContainerSides'
import { DevVisualizationButtons } from '../Molecules/DevVisualizationButtons'

const FooterDiv = styled.div`
  ${({ theme }) => {
    const { colors } = theme

    return css`
      position: relative;
      height: 300px;
      background-color: ${colors.fill.brand.strong};
      color: ${colors.text.neutral.invert};
      display: flex;
      align-items: center;
      justify-content: center;
    `
  }}
`

const BottomRightP = styled.p`
  ${({ theme }) => {
    const { spacing } = theme
    return css`
      position: absolute;
      bottom: ${spacing['024px']};
      left: ${spacing['024px']};
    `
  }}
`

const Footer = () => {
  return (
    <>
      <Spacer height={'096px'} />
      <FooterDiv>
        <PaddingContainerSides>
          <p>
            This webpage is made mostly with custom components.
            <br />
            If you want to see where I&apos;m using <b>grid</b> and{' '}
            <b>spacer</b> click below to toggle visualization
          </p>
          <BottomRightP>
            © Roope Määttä 2024. All rights reserved
            <br />
            roopemaatta(at)gmail.com
          </BottomRightP>
          <Spacer height={'012px'} />
          <DevVisualizationButtons />
        </PaddingContainerSides>
      </FooterDiv>
    </>
  )
}

export default Footer
