import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StyleGuideNavigationPage from '../components/Pages/StyleGuidePage/FrontPageNavigation/StyleGuideNavigationPage'
import HomePage from '../components/Pages/HomePage/HomePage'
import StyleGuideContent from './StyleGuideContent'

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/style-guide/' element={<StyleGuideNavigationPage />} />
    <Route path='/style-guide/*' element={<StyleGuideContent />} />

    {/* Add more routes here as your application grows */}
  </Routes>
)

export default AppRoutes
