import React from 'react'
import styled from 'styled-components'
import { NavigationBar } from './components/Organisms/NavigationBar'
import AppRoutes from './routes'
import Footer from './components/Organisms/Footer'
import PaddingContainerSides from './components/Atoms/PaddingContainerSides'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const MainContent = styled.main`
  flex: 1;
`

const App: React.FC = () => {
  return (
    <AppContainer>
      <NavigationBar />
      <MainContent>
        <PaddingContainerSides>
          <AppRoutes />
        </PaddingContainerSides>
      </MainContent>
      <Footer />
    </AppContainer>
  )
}

export default App
