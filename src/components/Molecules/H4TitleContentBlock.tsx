import React from 'react'
import { useTheme } from 'styled-components'
import { Spacer } from '../Atoms/Spacer'
import { LiteralUnion } from 'type-fest'
import { DefaultTheme } from 'styled-components'

type CustomLength =
  `${number}${'px' | 'em' | 'rem' | '%' | 'vh' | 'vw' | 'vmin' | 'vmax'}`

interface H4TitleContentBlockProps {
  title?: string | boolean | React.ReactElement
  description?: string | boolean
  content?: React.ReactNode | boolean
  style?: React.CSSProperties // Add this to accept inline styles
  customSpacingHeight?: LiteralUnion<
    keyof DefaultTheme['spacing'],
    CustomLength
  >
}

// Main component rendering the content
const H4TitleContentBlock: React.FC<H4TitleContentBlockProps> = ({
  title = 'title: Placeholder. If not needed set to {false}',
  description = 'description: Placeholder, text underneath title in gray. If not needed set to {false}',
  content = 'content: Placeholder, can be table, text, JSX, image, etc. If not needed set to {false}',
  style, // Accept the style prop
  customSpacingHeight, // Destructure the new prop
}) => {
  const theme = useTheme()

  return (
    <div style={style}>
      {title !== false && (
        <>
          <h4>{title}</h4>
          {/* Spacer after title only if description or content exists */}
          {(description !== false || content) && (
            <Spacer
              height={
                customSpacingHeight ||
                (description === false ? '016px' : '008px')
              }
            />
          )}
        </>
      )}

      {description !== false && (
        <>
          <p style={{ color: theme.colors.text.neutral.weak }}>{description}</p>
          {/* Spacer after description only if content exists */}
          {content && (
            <Spacer
              height={
                customSpacingHeight || (title === false ? '016px' : '040px')
              }
            />
          )}
        </>
      )}

      {content && <div>{content}</div>}
    </div>
  )
}

export default H4TitleContentBlock
