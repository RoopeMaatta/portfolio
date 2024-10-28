import React from 'react'

import Card from 'src/components/Molecules/Card/Card'
import { Spacer } from 'src/components/Atoms/Spacer'

const TestingPage: React.FC = () => {
  return (
    <>
      <h1>Cards showcase, work in process</h1>
      <Spacer height={'032px'} />
      <Card image />
      <Spacer height={'032px'} />
      <Card image isHorizontal />
    </>
  )
}

export default TestingPage
