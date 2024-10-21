import React from 'react'
import { NavigationBar } from './components/Organisms/NavigationBar'
import AppRoutes from './routes'
import Footer from './components/Organisms/Footer'
import PaddingContainerSides from './components/Atoms/PaddingContainerSides'

const App: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <PaddingContainerSides>
        <AppRoutes />
      </PaddingContainerSides>
      <Footer />
    </>
  )
}

export default App
