import { render, screen } from '@testing-library/react'
import { Person } from './Person'

test('renders learn react link', () => {
  render(<Person name='Heang' />)
  const divElement = screen.getByRole('contentInfo')
  expect(divElement).toHaveTextContent('Name is Heang')
  expect(divElement).toHaveAttribute('role', 'contentInfo')
})
