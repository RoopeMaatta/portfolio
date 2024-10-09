import React from 'react'
import GridWrapper from 'src/components/Molecules/GridContainer/GridWrapper'
// import useResponsiveValue from '@hooks/useResponsiveValue'
import Card from 'src/components/Molecules/Card/Card'
import { ButtonIcon } from 'src/components/Atoms/Button'
import { Home, Code } from 'react-feather'

const TestingPage: React.FC = () => {
  return (
    <GridWrapper rowGap>
      <ButtonIcon
        size='regular'
        shape='round'
        buttonStyle='tonal'
        icon={<Code />}
        isInteractive={false}
      />

      <Card icon={<Home />}></Card>
      <Card icon image></Card>
      <Card></Card>
    </GridWrapper>
  )
}

export default TestingPage
