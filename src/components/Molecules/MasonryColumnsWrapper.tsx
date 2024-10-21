import React, { useState, useEffect, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import useResponsiveValue from '../../hooks/useResponsiveValue'
import { ReactNode } from 'react'

const MasonryColumnsWrapper = styled.div<{ gapResponsive: string }>`
  display: flex;
  gap: ${props => props.gapResponsive};
`

const Column = styled.div<{ gapResponsive: string }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gapResponsive};
  flex: 1;
`

interface MasonryContainerProps {
  children: ReactNode[]
}

const MasonryContainer = ({ children }: MasonryContainerProps) => {
  const theme = useTheme()
  const gapResponsive = useResponsiveValue([
    `${theme.breakpoints.s.gridGap}px`,
    `${theme.breakpoints.m.gridGap}px`,
    `${theme.breakpoints.l.gridGap}px`,
  ])
  const columnCount = useResponsiveValue([1, 2, 3])

  const [columns, setColumns] = useState<ReactNode[][]>([])

  // Refs to store the heights of each child
  const childRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Initialize columns and their heights
    const newColumns: ReactNode[][] = Array.from(
      { length: columnCount },
      () => []
    )
    const columnHeights = new Array(columnCount).fill(0)

    // Measure the heights of each child
    const childHeights = childRefs.current.map(ref =>
      ref ? ref.offsetHeight : 0
    )

    // Distribute children based on the measured heights
    children.forEach((child, index) => {
      const childHeight = childHeights[index]
      // Find the column with the minimum height
      const minHeightIndex = columnHeights.indexOf(Math.min(...columnHeights))
      // Assign the child to that column
      newColumns[minHeightIndex].push(child)
      // Update the total height of that column
      columnHeights[minHeightIndex] += childHeight
    })

    setColumns(newColumns)
  }, [children, columnCount])

  // Render the children invisibly to measure their heights
  return (
    <div
      style={{
        gridColumn: '1/-1',
      }}
    >
      {/* Invisible container to measure child heights */}
      <div
        style={{
          visibility: 'hidden',
          position: 'absolute',
          top: 0,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div ref={el => (childRefs.current[index] = el)}>{child}</div>
        ))}
      </div>

      {/* Actual Masonry Layout */}
      <MasonryColumnsWrapper gapResponsive={gapResponsive}>
        {columns.map((columnChildren, columnIndex) => (
          <Column key={columnIndex} gapResponsive={gapResponsive}>
            {columnChildren}
          </Column>
        ))}
      </MasonryColumnsWrapper>
    </div>
  )
}

export default MasonryContainer
