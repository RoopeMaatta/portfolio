import React from 'react'
import { Button } from '../../Atoms/Button'
import { useDevVisualizationContext } from '../../../contexts/DevVisualizationContext'

const DevVisualizationButtons: React.FC = () => {
  const {
    showMainGridVisualization,
    toggleMainGridVisualization,
    showSpacerVisualization,
    toggleSpacerVisualization,
  } = useDevVisualizationContext()

  return (
    <div style={{ position: 'relative', display: 'flex', gap: '8px' }}>
      <Button
        label={`Show Grid Visualization (${showMainGridVisualization ? 'True' : 'False'})`}
        onClick={toggleMainGridVisualization}
        buttonStyle='tonal'
        fullWidth={true}
      />
      <Button
        label={`Show Spacer Visualization (${showSpacerVisualization ? 'True' : 'False'})`}
        onClick={toggleSpacerVisualization}
        buttonStyle='tonal'
        fullWidth={true}
      />
    </div>
  )
}

export default DevVisualizationButtons
