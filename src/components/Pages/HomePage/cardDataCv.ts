import useResponsiveValue from '@hooks/useResponsiveValue'

export const useCardDataCv = () => {
  const spanFirstItem = useResponsiveValue(['span 4', '1 / -1', 'span 4'])

  const cardDataCv = [
    {
      key: 'FullStackDeveloper',
      title: 'Full Stack Developer',
      gridColumn: spanFirstItem,
      route: '/style-guide/button-variations',
      description: 'This is a description underneath a title',
    },
    {
      key: 'Architect',
      title: 'Architect',
      gridColumn: 'span 4',
      route: '/style-guide/button-variations',
      description: 'This is a description underneath a title',
    },
    {
      key: 'Crafting',
      title: 'Crafting',
      gridColumn: 'span 4',
      route: '/style-guide/button-variations',
      description: 'This is a description underneath a title',
    },
  ]

  return cardDataCv
}
