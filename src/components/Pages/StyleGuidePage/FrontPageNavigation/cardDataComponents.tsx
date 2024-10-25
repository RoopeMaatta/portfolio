import React from 'react'
import { ArrowDownCircle, CreditCard } from 'react-feather'
import TitleIconLeft from 'src/components/Molecules/TitleIconLeft'
import { useTheme } from 'styled-components'

export const useCardDataComponents = () => {
  const theme = useTheme()
  const cardDataComponents = [
    {
      key: 'Button',
      gridColumn: 'span 4',
      route: '/style-guide/button-variations',
      title: <TitleIconLeft icon={<ArrowDownCircle />} title='Button' />,
      description:
        'Built using a single Higher-Order Component (HOC) that provides Button, ButtonIcon, and ButtonContainer exports.',
    },
    {
      key: 'Card',
      gridColumn: 'span 4',
      route: '',
      title: <TitleIconLeft icon={<CreditCard />} title='Card' />,
      description:
        'Card showcase page still under construction. This custom Card component has been used in this website.',
      style: { color: theme.colors.fill.state.disabled },
    },
  ]

  return cardDataComponents
}
