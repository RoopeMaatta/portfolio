import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonIcon } from 'src/components/Atoms/Button'
import Logo from '../../../assets/logo.svg?react'
import { ArrowLeft, User } from 'react-feather'

const Nav = styled.nav`
  position: sticky;
  top: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1000;
  margin-bottom: 1rem;
  background-color: white;
  border-bottom: 2px solid #ddd;
`

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`

const CenterSection = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  flex: 1;
  display: flex;
  justify-content: center;
`

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const NavigationBar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleBackClick = () => {
    if (
      document.referrer &&
      new URL(document.referrer).origin !== window.location.origin
    ) {
      // If the referrer is an external URL, navigate to home
      navigate('/')
    } else {
      // Otherwise, go back to the previous page
      navigate(-1)
    }
  }

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <Nav>
      {location.pathname !== '/' && (
        <LeftSection>
          <ButtonIcon
            onClick={handleBackClick}
            shape='round'
            icon={<ArrowLeft />}
          />
        </LeftSection>
      )}
      <CenterSection>
        <Logo style={{ width: 'auto', height: 'auto' }} />
      </CenterSection>
      <RightSection>
        <ButtonIcon onClick={handleHomeClick} shape='round' icon={<User />} />
      </RightSection>
    </Nav>
  )
}

export default NavigationBar
