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
        label={`Show Grid (${showMainGridVisualization ? 'True' : 'False'})`}
        onClick={toggleMainGridVisualization}
        buttonStyle='filled'
        fullWidth={true}
        size='small'
      />
      <Button
        label={`Show Spacer (${showSpacerVisualization ? 'True' : 'False'})`}
        onClick={toggleSpacerVisualization}
        buttonStyle='filled'
        fullWidth={true}
        size='small'
      />
    </div>
  )
}

export default DevVisualizationButtons
