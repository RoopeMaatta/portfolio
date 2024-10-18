import React from 'react'
import styled from 'styled-components'
import useResponsiveValue from '@hooks/useResponsiveValue'
import { Button } from 'src/components/Atoms/Button'
import { Home, Edit3, Code, BookOpen, Heart } from 'react-feather'
import ImageComponent from 'src/components/Organisms/ImageComponent/ImageComponent'

const PBoldGrey = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.neutral.weak};
`
const UlSimple = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

const FullStackContent: React.FC = () => {
  return (
    <>
      <PBoldGrey>Languages & Technologies</PBoldGrey>
      <UlSimple>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>HTML5, CSS3</li>
        <li>SQL</li>
      </UlSimple>
      <br />
      <PBoldGrey>Frontend Development</PBoldGrey>
      <UlSimple>
        <li>React.js</li>
        <li>React Hooks (useState, useContext, useEffect, etc.)</li>
        <li>Redux</li>
        <li>Styled-Components</li>
        <li>Material-UI (MUI)</li>
      </UlSimple>
      <br />
      <PBoldGrey>Backend Development & APIs</PBoldGrey>
      <UlSimple>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>RESTful APIs</li>
        <li>GraphQL</li>
        <li>Sequelize (ORM)</li>
      </UlSimple>
      <br />
      <PBoldGrey>Databases</PBoldGrey>
      <UlSimple>
        <li>MongoDB</li>
        <li>SQLite</li>
        <li>SQL</li>
      </UlSimple>
      <br />
      <PBoldGrey>Version Control & Collaboration Tools</PBoldGrey>
      <UlSimple>
        <li>Git</li>
        <li>GitHub</li>
        <li>GitHub Codespaces</li>
      </UlSimple>
      <br />
      <PBoldGrey>Development Tools & Build Systems</PBoldGrey>
      <UlSimple>
        <li>Visual Studio Code (VSCode)</li>
        <li>Vite (Build Tool)</li>
        <li>Docker</li>
      </UlSimple>
      <br />
      <PBoldGrey>Testing & Code Quality</PBoldGrey>
      <UlSimple>
        <li>Jest</li>
        <li>Mocha</li>
        <li>ESLint</li>
        <li>Prettier</li>
      </UlSimple>
    </>
  )
}

const ArchitectContent: React.FC = () => {
  return (
    <>
      <PBoldGrey>Worked with</PBoldGrey>
      <UlSimple>
        <li>Kanttia2 (5 years)</li>
        <li>City of Kajaani (2 years)</li>
        <li>Oulu University (2 years)</li>
      </UlSimple>
      <br />
      <PBoldGrey>Tools</PBoldGrey>
      <UlSimple>
        <li>Archicad</li>
        <li>SketchUp</li>
        <li>AutoCad</li>
        <li>Adobe apps</li>
      </UlSimple>
      <br />
      <PBoldGrey>Projects</PBoldGrey>
      <UlSimple>
        <li>Product and concept desing (8x)</li>
        <li>High-rise and residential develpment (8x)</li>
        <li>Low-rise homes (2x)</li>
        <li>Urban Planning (1x)</li>
        <li>Repair construction (1x)</li>
        <li>Architecture competitions (2x)</li>
      </UlSimple>
      <br />
      <ImageComponent
        src='https://res.cloudinary.com/dbm0udwcq/image/upload/v1729264461/CV_-_Vain_projektit_Roope_Määttä_gmtyka.pdf'
        alt='Architecture works CV'
        trigger={
          <Button
            size='small'
            buttonStyle='clear'
            label='See all projects here'
            fullWidth
          ></Button>
        }
      />
    </>
  )
}

const CraftingContent: React.FC = () => {
  return (
    <>
      <PBoldGrey>Crafts</PBoldGrey>
      <UlSimple>
        <li>Digital painting</li>
        <li>Watercolors</li>
        <li>Pastel</li>
        <li>Drawing</li>
        <li>Jewellery, Silver and bone</li>
        <li>Clay sculptures</li>
      </UlSimple>
      <br />
      <PBoldGrey>Digital Tools</PBoldGrey>
      <UlSimple>
        <li>Procreate</li>
        <li>Procreate Dreams</li>
        <li>Adobe Photoshop</li>
        <li>Adobe InDesign</li>
      </UlSimple>
      <br />
      <PBoldGrey>Notable work</PBoldGrey>
      <UlSimple>
        <li>{"1st place, Suomen Rahapaja: Children's Creativity"}</li>
      </UlSimple>
    </>
  )
}

const EducationContent: React.FC = () => {
  return (
    <>
      <PBoldGrey>Oulu University</PBoldGrey>
      <UlSimple>
        <li>✅ Masters in architecture (2017)</li>
        <li>✅ Bachelor in architecture (2016)</li>
      </UlSimple>
      <br />
      <PBoldGrey>Online</PBoldGrey>
      <PBoldGrey>Helsinki Full stack open</PBoldGrey>
      <UlSimple>
        <li>✅ Main courses (parts 0-5)</li>
        <li>✅ Advanced courses (parts 6-9)</li>
      </UlSimple>
      <PBoldGrey>Schoolism</PBoldGrey>
      <UlSimple>
        <li>✅ Multiple art courses</li>
      </UlSimple>
      <PBoldGrey>Treehouse</PBoldGrey>
      <UlSimple>
        <li>✅ +30 courses and +5700 points </li>
      </UlSimple>

      <ImageComponent
        src='https://res.cloudinary.com/dbm0udwcq/image/upload/v1729264359/Treehouse_Completed_syyftm.pdf'
        alt='Compelted Treehouse Courses'
        isScrollable={true}
        trigger={
          <Button
            size='small'
            buttonStyle='clear'
            label='See more about completed courses'
          ></Button>
        }
      />
    </>
  )
}

const BonusCard = () => {
  return {
    key: 'Placholder',
    icon: <Heart />,
    gridColumn: 'span 4',
    title: 'Dog: Kita',
    description: 'Likes pettings',
    image:
      'https://res.cloudinary.com/dbm0udwcq/image/upload/v1728545710/IMG_3034_ajuytu.jpg',
    isHorizontal: true,
  }
}

export const useCardDataCv = () => {
  const BonusCardSpacing = useResponsiveValue([false, true, false])
  const educationGridColumn = useResponsiveValue(['span 4', 'span 8', 'span 8'])
  const cardDataCv = [
    {
      key: 'FullStackDeveloper',
      icon: <Code />,
      title: 'Full Stack Developer',
      gridColumn: 'span 4',
      gridRow: 'span 3',
      description:
        'I enjoy crafting websites from scratch and implementing the latest technologies',
      content: <FullStackContent />,
    },
    {
      key: 'Architect',
      icon: <Home />,
      title: 'Architect',
      gridColumn: 'span 4',
      gridRow: 'span 2',
      description:
        'I design modular homes and prefabricated building modules ready to face the problems of tomorrow',
      content: <ArchitectContent />,
    },
    {
      key: 'Crafting',
      icon: <Edit3 />,
      title: 'Crafting',
      gridColumn: 'span 4',
      gridRow: BonusCardSpacing ? 'span 2' : '',
      description:
        'On my free time I enjoy immersing myself into many kinds of creative art forms',
      content: <CraftingContent />,
    },
    BonusCard(),
    {
      key: 'Education',
      icon: <BookOpen />,
      title: 'Education',
      gridColumn: educationGridColumn,
      description:
        'Learning is a never ending journey, and it is more fun to travel in good company',
      content: <EducationContent />,
    },
  ]

  return cardDataCv
}
