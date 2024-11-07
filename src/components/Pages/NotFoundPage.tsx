// src/pages/NotFound.jsx
import React from 'react'
import { Spacer } from 'src/components/Atoms/Spacer'
import { Button } from '../Atoms/Button'
import { Home } from 'react-feather'
import { useNavigate } from 'react-router-dom'
import PageNotFoundIllustration from '../../assets/pageNotFoundIllustration.svg?react'

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }

  return (
    <div>
      <Spacer height={'032px'} />
      <h1>404 - Page Not Found</h1>
      <p>Some sheep might have munched on the page you were looking for.</p>
      <Spacer height={'032px'} />

      <Button label='The way back home' icon={<Home />} onClick={goToHome} />
      <Spacer height={'032px'} />

      <PageNotFoundIllustration
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '600px',
          maxHeight: '80vh',
        }}
      />
    </div>
  )
}

export default NotFoundPage
