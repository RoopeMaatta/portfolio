import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDarkMode } from '../../hooks'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const NavigationBar: React.FC = () => {
  const isDarkMode = useDarkMode()

  return (
    <>
      <Nav>
        <Link to='/style-guide'>Style Guide</Link>
        <Link to='/button-variations'>Button Variations</Link>
        Darkmode is: {isDarkMode ? 'on' : 'off'}
      </Nav>
    </>
  )
}

export default NavigationBar
