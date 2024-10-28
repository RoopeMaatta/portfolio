import React from 'react'
import Button from '../../Atoms/Button/Button'
import Table, { TableColumn } from 'src/components/Molecules/Table/Table'
import TableStyle1Wrapper from 'src/components/Molecules/Table/TableStyle1Wrapper'
import { ButtonIcon } from '../../Atoms/Button/Button'
import { Compass } from 'react-feather'
import { Spacer } from 'src/components/Atoms/Spacer'
import { useTheme } from 'styled-components'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

interface ButtonTable {
  small: React.ReactNode
  regular: React.ReactNode
  large: React.ReactNode
}

interface ButtonShowcaseTableProps {
  buttonStyle: 'filled' | 'tonal' | 'outline' | 'clear'
  TableTitle: string
  TableText: string
  iconPosition?: 'left' | 'right' | null
  fullWidth?: boolean
}

const ButtonShowcaseTable: React.FC<ButtonShowcaseTableProps> = ({
  buttonStyle,
  TableTitle,
  TableText,
  iconPosition,
  fullWidth,
}) => {
  const theme = useTheme()

  const shapes: Array<'square' | 'regular' | 'round'> = [
    'square',
    'regular',
    'round',
  ]

  const renderButtonComponents = (
    size: 'small' | 'regular' | 'large',
    shape: 'square' | 'regular' | 'round'
  ) => (
    <FlexContainer>
      <ButtonIcon
        buttonStyle={buttonStyle}
        size={size}
        icon={<Compass />}
        shape={shape}
      />
      <Button
        buttonStyle={buttonStyle}
        size={size}
        label='Button'
        shape={shape}
        fullWidth={fullWidth}
        {...(iconPosition ? { icon: <Compass />, iconPosition } : {})}
      />
    </FlexContainer>
  )

  const data: ButtonTable[] = shapes.map(shape => ({
    small: renderButtonComponents('small', shape),
    regular: renderButtonComponents('regular', shape),
    large: renderButtonComponents('large', shape),
  }))

  const columns: TableColumn<ButtonTable>[] = [
    {
      header: 'Small',
      accessor: 'small',
    },
    {
      header: 'Regular',
      accessor: 'regular',
    },
    {
      header: 'Large',
      accessor: 'large',
    },
  ]

  return (
    <TableStyle1Wrapper>
      <h2>{TableTitle}</h2>
      <Spacer height='008px' />
      <p style={{ color: theme.colors.text.neutral.weak }}>{TableText}</p>
      <Spacer height='040px' />
      <Table<ButtonTable> columns={columns} data={data} />
    </TableStyle1Wrapper>
  )
}

export default ButtonShowcaseTable
