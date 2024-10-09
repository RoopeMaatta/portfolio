import React from 'react'
import GridWrapper from 'src/components/Molecules/GridContainer/GridWrapper'
// import useResponsiveValue from '@hooks/useResponsiveValue'

const TestingPage: React.FC = () => {
  return (
    <div>
      <GridWrapper rowGap>
        {/* Item A */}
        <div
          style={{
            backgroundColor: 'red',
            height: '300px',
            gridColumn: 'span 4',
            gridRow: 'span 3',
          }}
        >
          A
        </div>

        {/* Item B */}
        <div
          style={{
            backgroundColor: 'green',
            height: '100px',
            gridColumn: 'span 4',
          }}
        >
          Bbb
        </div>

        {/* Item C */}
        <div
          style={{
            backgroundColor: 'blue',
            height: '100px',
            gridColumn: 'span 4',
          }}
        >
          Cc
        </div>
        <div
          style={{
            backgroundColor: 'blue',
            height: '100px',
            gridColumn: 'span 4',
          }}
        >
          Cc
        </div>
        <div
          style={{
            backgroundColor: 'blue',
            height: '100px',
            gridColumn: 'span 4',
          }}
        >
          Cc
        </div>
        <div
          style={{
            backgroundColor: 'blue',
            height: '100px',
            gridColumn: 'span 4',
          }}
        >
          Cc
        </div>
      </GridWrapper>
    </div>
  )
}

export default TestingPage
