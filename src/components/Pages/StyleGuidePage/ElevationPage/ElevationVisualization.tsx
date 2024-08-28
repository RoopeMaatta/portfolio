import React from 'react'
import styled, { DefaultTheme } from 'styled-components'

interface ElevationVisualizationProps {
  theme: DefaultTheme
}

// Define the styled components using the theme passed as a prop
const Container = styled.div<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.colors.fill.background.base};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 70vw;
  z-index: -1;
`

const Top = styled.div<{ theme: DefaultTheme }>`
  height: 50%; /* Adjust as needed */
`

const Middle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align to the start to allow text underneath */
  z-index: 1; /* Ensure this stays on top of Top and Bottom */
`

const MiddleElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the text under the element */
  margin: 0 16px; /* Space between the two elements */
`

const MiddleElement1 = styled.div<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.colors.fill.background.raised};
  width: 25vw;
  height: 50vw;
  box-shadow: ${({ theme }) => theme.shadow.raised};
  border-radius: ${({ theme }) => theme.radius['16px']};
`

const MiddleElement2 = styled.div<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.colors.fill.background.overlay};
  width: 40vw;
  height: 50vw;
  box-shadow: ${({ theme }) => theme.shadow.overlay};
  border-radius: ${({ theme }) => theme.radius['16px']};
`

const ElementText = styled.p<{ theme: DefaultTheme }>`
  margin-top: ${({ theme }) => theme.spacing['008px']};
  color: ${({ theme }) =>
    theme.colors.text.neutral.weak}; /* Use a text color from the theme */
  font-size: 1rem; /* Adjust the text size as needed */
  text-align: center;
`

const Bottom = styled.div<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.colors.fill.neutral.weak};
  height: 50%; /* Adjust as needed */
`

const ElevationVisualization: React.FC<ElevationVisualizationProps> = ({
  theme,
}) => {
  return (
    <Container theme={theme}>
      <Top theme={theme} />
      <Bottom theme={theme} />
      <Middle>
        <MiddleElementContainer>
          <MiddleElement1 theme={theme} />
          <ElementText theme={theme}>Raised</ElementText>
        </MiddleElementContainer>
        <MiddleElementContainer>
          <MiddleElement2 theme={theme} />
          <ElementText theme={theme}>Overlay</ElementText>
        </MiddleElementContainer>
      </Middle>
    </Container>
  )
}

export default ElevationVisualization
