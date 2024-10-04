import React from 'react'
import { NavigationBar } from './components/Organisms/NavigationBar'
import AppRoutes from './routes'
import Footer from './components/Organisms/Footer'
import PaddingContainerSides from './components/Atoms/PaddingContainerSides'

const items = [
  { label: 'Style Guide', href: '/style-guide' },
  { label: 'Button Variations', href: '/button-variations' },
]

const App: React.FC = () => {
  // const theme = useTheme()

  return (
    <>
      <NavigationBar items={items} />
      <PaddingContainerSides>
        <AppRoutes />
      </PaddingContainerSides>
      <Footer />
    </>
  )
}

export default App
