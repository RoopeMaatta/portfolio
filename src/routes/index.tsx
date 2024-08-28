import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StyleGuidePage from '../components/Pages/StyleGuidePage/StyleGuidePage'
import ButtonVariationsPage from '../components/Pages/ButtonVariationsPage'

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path='/style-guide/*' element={<StyleGuidePage />} />
    <Route path='/button-variations' element={<ButtonVariationsPage />} />
    {/* Add more routes here as your application grows */}
  </Routes>
)

export default AppRoutes
