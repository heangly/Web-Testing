import { render, screen, fireEvent } from '@testing-library/react'
import { ButtonWrapper } from './ButtonWrapper'

test('handles on click', () => {
  const onClick = jest.fn()
  render(<ButtonWrapper onClick={onClick} title='Add Item' />)
  const buttonElement = screen.getByText(/add item/i)
  fireEvent.click(buttonElement)
  expect(onClick).toHaveBeenCalledTimes(1)
})
