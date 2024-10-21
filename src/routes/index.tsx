import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StyleGuideNavigationPage from '../components/Pages/StyleGuidePage/FrontPageNavigation/StyleGuideNavigationPage'
import HomePage from '../components/Pages/HomePage/HomePage'
import StyleGuideContent from './StyleGuideContent'
import TraditionalArtsPage from '../components/Pages/TraditionalArtsGalleryPage/TraditionalArtsPage'

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/style-guide/' element={<StyleGuideNavigationPage />} />
    <Route path='/style-guide/*' element={<StyleGuideContent />} />

    <Route path='/jewellery' element={<StyleGuideContent />} />
    <Route path='/traditional-art' element={<TraditionalArtsPage />} />
    <Route path='/digital-art' element={<StyleGuideContent />} />

    {/* Add more routes here as your application grows */}
  </Routes>
)

export default AppRoutes
