import React from 'react'
import { useTheme } from 'styled-components'
import { ContainerFullWidth } from 'src/components/Atoms/ContainerFullWidth'
import Card from 'src/components/Organisms/Card/Card'

// Main component rendering the color data table
const TestingPage: React.FC = () => {
  const theme = useTheme()

  return (
    <div style={{ display: 'contents' }}>
      <ContainerFullWidth
        style={{
          // backgroundColor: 'hsl(212 100% 45% / 100%)',
          borderStyle: 'dotted',
          borderColor: theme.colors.stroke.neutral.strong,
          borderWidth: theme.stroke.strong,
          padding: theme.spacing['032px'],
        }}
      >
        <Card />
      </ContainerFullWidth>
    </div>
  )
}

export default TestingPage
