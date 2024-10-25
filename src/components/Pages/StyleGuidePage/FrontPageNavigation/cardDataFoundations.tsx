import React from 'react'
import useResponsiveValue from '@hooks/useResponsiveValue'
import TitleIconLeft from 'src/components/Molecules/TitleIconLeft'
import {
  Type,
  Monitor,
  AlignCenter,
  Droplet,
  Layers,
  Sidebar,
  Compass,
} from 'react-feather'

export const useCardDataFoundations = () => {
  const gridColumnCard1 = useResponsiveValue(['span 4', 'span 8', 'span 8'])
  const isHorizontalCard1 = useResponsiveValue([false, true, true])

  const cardDataFoundations = [
    {
      isHorizontal: isHorizontalCard1,
      key: 'Typography',
      gridColumn: gridColumnCard1,
      route: '/style-guide/typography',
      title: <TitleIconLeft icon={<Type />} title='Typography' />,
      description:
        'Structured typography rules for clear, cohesive text presentation, taking into account screen sizes',
    },
    {
      key: 'Colors',
      gridColumn: gridColumnCard1,
      route: '/style-guide/colors',
      title: <TitleIconLeft icon={<Monitor />} title='Colors' />,
      description:
        'Foundational color palette designed for clarity and consistency, with light and dark modes fully integrated',
    },
    {
      key: 'Elevation',
      gridColumn: 'span 4',
      route: '/style-guide/elevation',
      title: <TitleIconLeft icon={<Layers />} title='Elevation' />,
      description: 'Elevation styles that create visual hierarchy and focus',
    },
    {
      key: 'Spacing',
      gridColumn: 'span 4',
      route: '/style-guide/spacing',
      title: <TitleIconLeft icon={<AlignCenter />} title='Spacing' />,
      description: 'Consistent spacing standards to maintain layout balance',
    },
    {
      key: 'Breakpoints',
      gridColumn: 'span 4',
      route: '/style-guide/breakpoints',
      title: <TitleIconLeft icon={<Sidebar />} title='Breakpoints' />,
      description: 'Breakpoints that make designs fluid across devices',
    },
    {
      key: 'Radius',
      gridColumn: 'span 4',
      route: '/style-guide/radius',
      title: <TitleIconLeft icon={<Droplet />} title='Radius' />,
      description: 'Border radius standards for smooth, modern interfaces',
    },
    {
      key: 'Testing',
      gridColumn: 'span 4',
      route: '/style-guide/testing',
      title: <TitleIconLeft icon={<Compass />} title='Testing' />,
      description:
        'This is for dev testing purposses. try to remember to delete before shiping out xD',
    },
  ]

  return cardDataFoundations
}
