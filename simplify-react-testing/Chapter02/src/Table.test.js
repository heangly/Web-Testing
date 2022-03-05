import { render, screen } from '@testing-library/react'
import fakeEmployees from './mocks/employees'
import Table from './Table'
import Travel from './Travel'

test('renders with expected values', () => {
  render(<Table employees={fakeEmployees} />)

  const johnSmithCell = screen.getByRole('cell', { name: /john smith/i })
  const engineeringCell = screen.getByRole('cell', { name: /engineering/i })
  const designerCell = screen.getByRole('cell', { name: /designer/i })

  const cells = [johnSmithCell, engineeringCell, designerCell]
  cells.forEach(cell => expect(cell).toBeInTheDocument())
})

it('has the correct class', () => {
  render(<Table employees={fakeEmployees} />)
  const tableElement = screen.getByRole('table')
  expect(tableElement).toHaveClass('table table-striped')
})

it('displays the header and paragraph text', () => {
  render(<Travel />)
  const headerElement = screen.getByRole('heading', {
    name: /travel anywhere/i
  })
  screen.debug(headerElement)
})
