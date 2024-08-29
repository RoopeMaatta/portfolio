import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useDarkMode } from '../../../hooks'
import { Button } from 'src/components/Atoms/Button'

const Nav = styled.nav`
  display: flex;
  justify-content: left;
  gap: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #ddd; /* Underline for the entire nav */
  position: relative;

  /* Pseudo-element for active item underline */
  &::after {
    content: '';
    position: absolute;
    bottom: -2px; /* Position it over the existing border */
    left: 0;
    height: 2px;
    width: 100%;
    background-color: transparent;
    pointer-events: none;
  }

  .active-button::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: blue;
  }
`

interface NavBarProps {
  items: Array<{ label: string; href: string }>
}

const NavigationBar: React.FC<NavBarProps> = ({ items }) => {
  const isDarkMode = useDarkMode()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <Nav>
        <Button label='Icon' onClick={() => {}} buttonStyle='tonal' />
        {items.map((item, index) => {
          const isActive = location.pathname === item.href
          return (
            <div
              key={index}
              className={isActive ? 'active-button' : ''}
              style={{ position: 'relative' }}
            >
              <Button
                label={item.label}
                onClick={() => navigate(item.href)}
                buttonStyle='text'
              />
            </div>
          )
        })}
        <p>Darkmode is: {isDarkMode ? 'on' : 'off'}</p>
      </Nav>
    </>
  )
}

export default NavigationBar
