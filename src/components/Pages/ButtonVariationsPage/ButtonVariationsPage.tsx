import React from 'react'
import ButtonShowcaseTable from './ButtonShowcaseTable'
import { Spacer } from 'src/components/Atoms/Spacer'

const ButtonVariationsPage: React.FC = () => {
  return (
    <>
      <h1> Button </h1>
      <Spacer height={'016px'} />
      <p>
        Built with a single Higher-Order Component (HOC), this module provides
        three exports: Button, ButtonIcon, and ButtonContainer. In this guide,
        we explore the versatility of Button and ButtonIcon by showcasing
        variations in shape, size, and style.
      </p>
      <Spacer height={'080px'} />
      <ButtonShowcaseTable
        buttonStyle='filled'
        TableTitle='Filled Buttons'
        TableText='Filled buttons have the most emphasis and should be used for primary actions.'
      />
      <Spacer height={'080px'} />
      <ButtonShowcaseTable
        buttonStyle='tonal'
        TableTitle='Tonal Buttons'
        TableText='Tonal buttons are used for secondary actions and have less emphasis.'
      />
      <Spacer height={'080px'} />
      <ButtonShowcaseTable
        buttonStyle='outline'
        TableTitle='Outline Buttons'
        TableText='Outline buttons are medium-emphasis buttons, used for alternative actions.'
      />
      <Spacer height={'080px'} />
      <ButtonShowcaseTable
        buttonStyle='clear'
        TableTitle='Clear Buttons'
        TableText='Clear buttons are low-emphasis buttons, typically used for less important actions.'
      />
    </>
  )
}

export default ButtonVariationsPage
