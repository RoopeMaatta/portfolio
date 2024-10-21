export const useCardDataProjects = () => {
  const cardDataProjects = [
    {
      key: 'SaanaDesignSystem',
      title: 'Saana Desing System',
      image: true,
      gridColumn: 'span 4',
      route: '/style-guide',
      description: 'This is a description underneath a title',
    },
    {
      key: 'BikeApp',
      title: 'Bike App',
      image: true,
      gridColumn: 'span 4',
      isExternal: true,
      route: 'https://github.com/RoopeMaatta/Bikeapp2024',
      description: 'This is a description underneath a title',
    },
    {
      key: 'VillaAuroras',
      title: 'Villa Auroras Cottages',
      image: true,
      gridColumn: 'span 4',
      isExternal: true,
      route: 'https://villaauroras.com/',
      description: 'This is a description underneath a title',
    },
    {
      key: 'Jewellery',
      title: 'Wuf Jewellery',
      image: true,
      gridColumn: 'span 4',
      route: '/jewellery',
      description: 'This is a description underneath a title',
    },
    {
      key: 'DigitalArt',
      title: 'Digital Arts',
      image: true,
      gridColumn: 'span 4',
      route: '/digital-art',
      description: 'This is a description underneath a title',
    },
    {
      key: 'TraditionalArt',
      title: 'Traditional Arts',
      image: true,
      gridColumn: 'span 4',
      route: '/traditional-art',
      description: 'This is a description underneath a title',
    },
  ]

  return cardDataProjects
}
