// Import statements
import React from 'react'
import Button from '../../Atoms/Button/Button'
import Table, { TableColumn } from 'src/components/Molecules/Table/Table'
import TableStyle1Wrapper from 'src/components/Molecules/Table/TableStyle1Wrapper'
import { ButtonIcon } from '../../Atoms/Button/Button'
import { Compass } from 'react-feather'
import { Spacer } from 'src/components/Atoms/Spacer'
import { useTheme } from 'styled-components'

interface ButtonTable {
  small: React.ReactNode
  regular: React.ReactNode
  large: React.ReactNode
}

interface ButtonShowcaseTableProps {
  buttonStyle: 'filled' | 'tonal' | 'outline' | 'clear'
  TableTitle: string
  TableText: string
}

const ButtonShowcaseTable: React.FC<ButtonShowcaseTableProps> = ({
  buttonStyle,
  TableTitle,
  TableText,
}) => {
  const theme = useTheme()

  const data: ButtonTable[] = [
    {
      small: (
        <>
          <ButtonIcon
            buttonStyle={buttonStyle}
            size='small'
            icon={<Compass />}
            shape='square'
          />
          <Spacer width={'008px'} />
          <Button
            buttonStyle={buttonStyle}
            size='small'
            label='Button'
            shape='square'
            fullWidth={false}
          />
        </>
      ),
      regular: (
        <>
          <ButtonIcon
            buttonStyle={buttonStyle}
            size='regular'
            icon={<Compass />}
            shape='square'
          />
          <Spacer width={'008px'} />
          <Button
            buttonStyle={buttonStyle}
            size='regular'
            label='Button'
            shape='square'
            fullWidth={false}
          />
        </>
      ),
      large: (
        <>
          <ButtonIcon
            buttonStyle={buttonStyle}
            size='large'
            shape='square'
            icon={<Compass />}
          />
          <Spacer width={'008px'} />
          <Button
            buttonStyle={buttonStyle}
            size='large'
            shape='square'
            label='Button'
            fullWidth={false}
          />
        </>
      ),
    },
    {
      small: (
        <>
          <ButtonIcon
            buttonStyle={buttonStyle}
            size='small'
            icon={<Compass />}
            shape='regular'
          />
          <Spacer width={'008px'} />
          <Button
            buttonStyle={buttonStyle}
            size='small'
            label='Button'
            shape='regular'
            fullWidth={false}
          />
        </>
      ),
      regular: (
        <>
          <ButtonIcon
            buttonStyle={buttonStyle}
            size='regular'
            icon={<Compass />}
            shape='regular'
          />
          <Spacer width={'008px'} />
          <Button
            buttonStyle={buttonStyle}
            size='regular'
            label='Button'
            shape='regular'
            fullWidth={false}
          />
        </>
      ),
      large: (
        <>
          <ButtonIcon
            buttonStyle={buttonStyle}
            size='large'
            shape='regular'
            icon={<Compass />}
          />
          <Spacer width={'008px'} />
          <Button
            buttonStyle={buttonStyle}
            size='large'
            shape='regular'
            label='Button'
            fullWidth={false}
          />
        </>
      ),
    },
    {
      small: (
        <>
          <ButtonIcon
            buttonStyle={buttonStyle}
            size='small'
            icon={<Compass />}
            shape='round'
          />
          <Spacer width={'008px'} />
          <Button
            buttonStyle={buttonStyle}
            size='small'
            label='Button'
            shape='round'
            fullWidth={false}
          />
        </>
      ),
      regular: (
        <>
          <ButtonIcon
            buttonStyle={buttonStyle}
            size='regular'
            icon={<Compass />}
            shape='round'
          />
          <Spacer width={'008px'} />
          <Button
            buttonStyle={buttonStyle}
            size='regular'
            label='Button'
            shape='round'
            fullWidth={false}
          />
        </>
      ),
      large: (
        <>
          <ButtonIcon
            buttonStyle={buttonStyle}
            size='large'
            shape='round'
            icon={<Compass />}
          />
          <Spacer width={'008px'} />
          <Button
            buttonStyle={buttonStyle}
            size='large'
            shape='round'
            label='Button'
            fullWidth={false}
          />
        </>
      ),
    },
  ]

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
      <Spacer height={'008px'} />
      <p style={{ color: theme.colors.text.neutral.weak }}>{TableText}</p>
      <Spacer height={'040px'} />
      <Table<ButtonTable> columns={columns} data={data} />
    </TableStyle1Wrapper>
  )
}

export default ButtonShowcaseTable
