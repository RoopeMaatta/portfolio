import useResponsiveValue from '@hooks/useResponsiveValue'

export const useCardDataFoundations = () => {
  const gridColumnCard1 = useResponsiveValue(['span 4', 'span 8', 'span 8'])
  const isHorizontalCard1 = useResponsiveValue([false, true, true])

  const cardDataFoundations = [
    {
      isHorizontal: isHorizontalCard1,
      key: 'Typography',
      gridColumn: gridColumnCard1,
      route: '/style-guide/typography',
      title: 'Typography',
      image: true,
      description: 'This is a description underneath a title',
    },
    {
      key: 'Colors',
      gridColumn: 'span 4',
      route: '/style-guide/colors',
      title: 'Colors',
      image: true,
      description: 'This is a description underneath a title',
    },
    {
      key: 'Spacing',
      gridColumn: 'span 4',
      route: '/style-guide/spacing',
      title: 'Spacing',
      image: true,
      description: 'This is a description underneath a title',
    },
    {
      key: 'Radius',
      gridColumn: 'span 4',
      route: '/style-guide/radius',
      title: 'Radius',
      image: true,
      description: 'This is a description underneath a title',
    },
    {
      key: 'Elevation',
      gridColumn: 'span 4',
      route: '/style-guide/elevation',
      title: 'Elevation',
      image: true,
      description: 'This is a description underneath a title',
    },
    {
      key: 'Breakpoints',
      gridColumn: 'span 4',
      route: '/style-guide/breakpoints',
      title: 'Breakpoints',
      image: true,
      description: 'This is a description underneath a title',
    },
    {
      key: 'Testing',
      gridColumn: 'span 4',
      route: '/style-guide/testing',
      title: 'Testing',
      image: true,
      description: 'This is a description underneath a title',
    },
  ]

  return cardDataFoundations
}
