import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../../assets/logo.svg?react'
import { ButtonContainer } from 'src/components/Atoms/Button'
import { useTheme } from 'styled-components'
import { Spacer } from 'src/components/Atoms/Spacer'

const Nav = styled.nav`
  position: sticky;
  top: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.fill.background.base};
  border-bottom: ${({ theme }) => theme.stroke.strong} solid
    ${({ theme }) => theme.colors.stroke.neutral.weak};
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
    <>
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
      <Spacer height={'016px'} />
    </>
  )
}

export default NavigationBar
