import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StyleGuideNavigationPage from '../components/Pages/StyleGuidePage/StyleGuideNavigationPage'
import ButtonVariationsPage from '../components/Pages/ButtonVariationsPage'
import StyleGuideContent from '../components/Pages/StyleGuidePage/StyleGuideContent'

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path='/style-guide/' element={<StyleGuideNavigationPage />} />
    <Route path='/style-guide/*' element={<StyleGuideContent />} />
    <Route path='/button-variations' element={<ButtonVariationsPage />} />
    {/* Add more routes here as your application grows */}
  </Routes>
)

export default AppRoutes
