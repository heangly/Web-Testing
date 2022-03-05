import { render, screen } from '@testing-library/react'
import Jumbotron from './Jumbotron'

test('displays the heading', () => {
  render(<Jumbotron />)
  const headingElement = screen.getByRole('heading', {
    name: /welcome to our site!/i
  })
  expect(headingElement).toBeInTheDocument()
})
