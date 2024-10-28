import React from 'react'
import ButtonShowcaseTable from './ButtonShowcaseTable'
import { Spacer } from 'src/components/Atoms/Spacer'
import { Button } from 'src/components/Atoms/Button'
import { Compass } from 'react-feather'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`

const ButtonVariationsPage: React.FC = () => {
  return (
    <>
      <h1> Button </h1>
      <Spacer height={'016px'} />
      <p>
        Built with a single Higher-Order Component (HOC), this module provides
        three exports: Button, ButtonIcon, and ButtonContainer. In this page, we
        explore the variations of Button and ButtonIcon with the props: shape,
        size, and buttonStyle.
      </p>
      <Spacer height={'080px'} />
      <h3> Button with icon and full width </h3>
      <Spacer height={'016px'} />
      <p>
        The Button component can expand to full width and supports an icon
        aligned to the left or right of the label.The Button component can
        expand to full width and supports an icon aligned to the left or right
        of the label.
      </p>
      <Spacer height={'016px'} />
      <FlexContainer>
        <Button
          buttonStyle='tonal'
          label='Show icon left'
          icon={<Compass />}
          iconPosition='left'
          onClick={() => {}}
        />
        <Button
          buttonStyle='tonal'
          label='No Icon on Button'
          onClick={() => {}}
        />
        <Button
          buttonStyle='tonal'
          label='Show icon right'
          icon={<Compass />}
          iconPosition='right'
          onClick={() => {}}
        />
        <Button
          buttonStyle='tonal'
          label='Toggle Button Full width'
          fullWidth={true}
          onClick={() => {}}
        />
      </FlexContainer>

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
