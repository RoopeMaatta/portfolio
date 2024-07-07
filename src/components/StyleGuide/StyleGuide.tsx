import React from 'react'
import { useTheme } from 'styled-components'

interface Theme {
  colors: Record<string, string | Record<string, string>>
  typography: Record<string, React.CSSProperties>
  spacing: Record<string, string>
  radius: Record<string, string>
}

const renderColorBlocks = (
  colors: Record<string, string | Record<string, string>>,
  path: string[] = []
) =>
  Object.keys(colors).map(key => {
    const value = colors[key]
    const newPath = [...path, key]

    return typeof value === 'object' && value !== null ? (
      <div key={key} style={{ margin: '10px 0' }}>
        <h3>{newPath.join(' > ')}</h3>
        {renderColorBlocks(value, newPath)}
      </div>
    ) : (
      <div
        key={key}
        style={{
          margin: '10px 0',
          display: 'grid',
          gridTemplateColumns: '200px 50px auto',
          alignItems: 'center',
          textAlign: 'left',
        }}
      >
        <span>{newPath.join(' > ')}:</span>
        <div
          style={{
            backgroundColor: value,
            width: '50px',
            height: '20px',
            border: '1px solid #000',
          }}
        ></div>
        <span style={{ marginLeft: '10px' }}>{value}</span>
      </div>
    )
  })

const renderTypography = (typography: Record<string, React.CSSProperties>) =>
  Object.keys(typography).map(key => {
    const style = typography[key]
    return (
      <div
        key={key}
        style={{
          margin: '10px 0',
          display: 'grid',
          gridTemplateColumns: '200px auto',
          alignItems: 'center',
          textAlign: 'left',
        }}
      >
        <span>{key}:</span>
        <p style={{ ...style, margin: 0 }}>
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>
    )
  })

const renderSpacing = (spacing: Record<string, string>) =>
  Object.keys(spacing).map(key => {
    const value = spacing[key]
    return (
      <div
        key={key}
        style={{
          margin: '10px 0',
          display: 'grid',
          gridTemplateColumns: '200px auto 100px',
          alignItems: 'center',
          textAlign: 'left',
        }}
      >
        <span>Spacing {key}:</span>
        <div
          style={{
            borderLeft: '2px solid #000',
            borderRight: '2px solid #000',
            height: '20px',
            width: value,
          }}
        ></div>
        <span style={{ marginLeft: '10px' }}>{value}</span>
      </div>
    )
  })

const renderRadius = (radius: Record<string, string>) =>
  Object.keys(radius).map(key => {
    const value = radius[key]
    return (
      <div
        key={key}
        style={{
          margin: '10px 0',
          display: 'grid',
          gridTemplateColumns: '200px 75px auto',
          alignItems: 'center',
          textAlign: 'left',
        }}
      >
        <span>Radius {key}:</span>
        <div
          style={{
            width: '75px',
            height: '75px',
            backgroundColor: '#ddd',
            borderRadius: value,
            border: '1px solid #000',
          }}
        ></div>
        <span style={{ marginLeft: '10px' }}>{value}</span>
      </div>
    )
  })

const StyleGuide: React.FC = () => {
  const theme = useTheme() as unknown as Theme

  const headingStyle: React.CSSProperties = {
    borderBottom: '2px solid #000',
    paddingBottom: '5px',
    textAlign: 'left',
  }

  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
      <h1>Style Guide</h1>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={headingStyle}>Colors</h2>
        {renderColorBlocks(theme.colors)}
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={headingStyle}>Typography</h2>
        {renderTypography(theme.typography)}
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={headingStyle}>Spacing</h2>
        {renderSpacing(theme.spacing)}
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={headingStyle}>Radius</h2>
        {renderRadius(theme.radius)}
      </div>
    </div>
  )
}

export default StyleGuide
