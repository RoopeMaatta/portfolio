import React from 'react'
import TitleIconLeft from 'src/components/Molecules/TitleIconLeft'
import { Home, Edit3, Code } from 'react-feather'

export const useCardDataProjects = () => {
  const cardDataProjects = [
    {
      key: 'SaanaDesignSystem',
      title: <TitleIconLeft icon={<Code />} title='Saana Desing System' />,
      image:
        'https://res.cloudinary.com/dbm0udwcq/image/upload/v1729932788/FullSizeRender_ntggmy.jpg',
      gridColumn: 'span 4',
      route: '/style-guide',
      description:
        "A tailored design system, the foundation behind this site's interface",
    },
    {
      key: 'BikeApp',
      title: <TitleIconLeft icon={<Code />} title='Bike App' />,
      image:
        'https://res.cloudinary.com/dbm0udwcq/image/upload/v1729932695/IMG_2134_jlpxkq.jpg',
      gridColumn: 'span 4',
      isExternal: true,
      route: 'https://github.com/RoopeMaatta/Bikeapp2024',
      description:
        'Full-stack app with database, backend, and frontend to explore Helsinki bike trips',
    },
    {
      key: 'VillaAuroras',
      title: <TitleIconLeft icon={<Home />} title='Villa Auroras Cottages' />,
      image:
        'https://res.cloudinary.com/dbm0udwcq/image/upload/v1729759399/IMG_2133_bqpur6.jpg',
      gridColumn: 'span 4',
      route: '/villa-auroras',
      description:
        'Architecture project: A home and four ski cabins, crafted for scenic retreats',
    },
    {
      key: 'Jewellery',
      title: <TitleIconLeft icon={<Edit3 />} title='Jewellery & Sculpture' />,
      image:
        'https://res.cloudinary.com/dbm0udwcq/image/upload/v1729621920/IMG_2788_xhwei3.jpg',
      gridColumn: 'span 4',
      route: '/jewellery&sculpture',
      description:
        'Original jewelry and sculptures, crafted with natural materials and artistry',
    },
    {
      key: 'DigitalArt',
      title: <TitleIconLeft icon={<Edit3 />} title='Digital Arts' />,
      image:
        'https://res.cloudinary.com/dbm0udwcq/image/upload/v1729526793/IMG_1022_sujjtz.jpg',
      gridColumn: 'span 4',
      route: '/digital-art',
      description:
        'Digital creations inspired by nature and life, blending impressionism with digital flair',
    },
    {
      key: 'TraditionalArt',
      title: <TitleIconLeft icon={<Edit3 />} title='Traditional Arts' />,
      image:
        'https://res.cloudinary.com/dbm0udwcq/image/upload/v1729527113/IMG_0003_oi8ynw.jpg',
      gridColumn: 'span 4',
      route: '/traditional-art',
      description:
        "Artworks crafted from observation, capturing life's subtle details and textures.",
    },
  ]

  return cardDataProjects
}
