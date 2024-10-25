import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Styled container to handle alignment
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center; /* Horizontally center icon and text */
  align-items: center; /* Vertically center icon and text */
  height: 100%; /* Adjust this as needed */

  svg {
    margin-right: ${({ theme }) => theme.spacing['008px']};
  }
`

// Define the prop types using TypeScript
interface TitleIconLeftProps {
  icon: React.ReactNode // Type for JSX elements
  title: string
}

// The TitleIconLeft component
const TitleIconLeft: React.FC<TitleIconLeftProps> = ({ icon, title }) => {
  return (
    <TitleWrapper>
      {icon} {title}
    </TitleWrapper>
  )
}

// PropTypes validation to satisfy ESLint
TitleIconLeft.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default TitleIconLeft
