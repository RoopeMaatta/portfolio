import React from 'react'
// import useResponsiveValue from '@hooks/useResponsiveValue'
import Card from 'src/components/Molecules/Card/Card'

import H4TitleContentBlock from 'src/components/Molecules/H4TitleContentBlock'

const TestingPage: React.FC = () => {
  return (
    <>
      <Card description={false} content={false} />

      <H4TitleContentBlock
        title='Testing2'
        description={false}
        content={false}
      />
    </>
  )
}

export default TestingPage
