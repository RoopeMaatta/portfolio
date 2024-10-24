import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../../assets/logo.svg?react'
import { ButtonContainer } from 'src/components/Atoms/Button'
import { useTheme } from 'styled-components'

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
  const theme = useTheme()

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <Nav>
      <LeftSection></LeftSection>

      <CenterSection>
        <ButtonContainer
          onClick={handleHomeClick}
          style={{ padding: theme.spacing['012px'] }}
          shape='round'
        >
          <Logo style={{ width: 'auto', height: 'auto' }} />
        </ButtonContainer>
      </CenterSection>

      <RightSection></RightSection>
    </Nav>
  )
}

export default NavigationBar
