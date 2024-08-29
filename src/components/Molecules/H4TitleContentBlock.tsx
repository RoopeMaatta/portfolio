import React from 'react'
import { useTheme } from 'styled-components'
import { Spacer } from '../Atoms/Spacer'

interface H4TitleContentBlockProps {
  title?: string | boolean
  description?: string | boolean
  content?: React.ReactNode | boolean
  style?: React.CSSProperties // Add this to accept inline styles
}

// Main component rendering the content
const H4TitleContentBlock: React.FC<H4TitleContentBlockProps> = ({
  title = 'title: Placeholder. If not needed set to {false}',
  description = 'description: Placeholder, text underneath title in gray. If not needed set to {false}',
  content = 'content: Placeholder, can be table, text, JSX, image, etc. If not needed set to {false}',
  style, // Accept the style prop
}) => {
  const theme = useTheme()

  return (
    <div style={style}>
      {title !== false && (
        <>
          <h4>{title}</h4>
          {/* Spacer after title, depends on the presence of description */}
          <Spacer height={description === false ? '016px' : '008px'} />
        </>
      )}

      {description !== false && (
        <>
          <p style={{ color: theme.colors.text.neutral.weak }}>{description}</p>
          {/* Spacer after description, depends on the presence of content */}
          {content !== false && (
            <Spacer height={title === false ? '016px' : '040px'} />
          )}
        </>
      )}

      {content !== false && <div>{content}</div>}
    </div>
  )
}

export default H4TitleContentBlock
