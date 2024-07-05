import React from 'react'
import { useTheme } from 'styled-components'

const renderColorBlocks = (colors: any, path: string[] = []) =>
  Object.entries(colors).map(([key, value]) => {
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
          gridTemplateColumns: '200px auto 100px',
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
        <span>{value}</span>
      </div>
    )
  })

const renderTypography = (typography: any) =>
  Object.entries(typography).map(([key, style]) => (
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
  ))

const renderSpacing = (spacing: any) =>
  Object.entries(spacing).map(([key, value]) => (
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
      <span>{value}</span>
    </div>
  ))

const renderRadius = (radius: any) =>
  Object.entries(radius).map(([key, value]) => (
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
      <span>{value}</span>
    </div>
  ))

const StyleGuide: React.FC = () => {
  const theme = useTheme()

  const headingStyle = {
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
