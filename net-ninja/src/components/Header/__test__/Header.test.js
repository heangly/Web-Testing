import { render, screen } from '@testing-library/react'
import Header from '../Header'

test('render heading correctly', () => {
  render(<Header title='My Header' />)
  const headingElement = screen.getByRole('heading', { name: /my header/i })
  expect(headingElement).toBeInTheDocument()
})

// test('should render same text passed into title prop', () => {
//   render(<Header title='My Header' />)
//   const headingElement = screen.getByRole('heading', { name: /cats/i })
//   expect(headingElement).toBeInTheDocument()
// })

// test('should get title', () => {
//   render(<Header title='My Header' />)
//   const headingElement = screen.getByTitle(/header/i)
//   expect(headingElement).toBeInTheDocument()
// })

// // Find By

// test('render heading correctly 2', async () => {
//   render(<Header title='My Header' />)
//   const headingElement = await screen.findByText(/my header/i)
//   expect(headingElement).toBeInTheDocument()
// })

// // Query By
// test('render heading correctly 3', () => {
//   render(<Header title='My Header' />)
//   const headingElement = screen.queryByText(/dogs/i)
//   expect(headingElement).not.toBeInTheDocument()
// })

// //Ge All by
// test('render heading correctly 4', () => {
//   render(<Header title='My Header' />)
//   const headingElements = screen.getAllByRole('heading')
//   expect(headingElements.length).toBe(2)
// })
