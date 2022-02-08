import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TodoFooter from '../TodoFooter'

const MockTodoFooter = ({ num }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={num} />
    </BrowserRouter>
  )
}

describe('TodoFooter', () => {
  test('should render the correct amount of incomplete tasks', () => {
    render(<MockTodoFooter num={5} />)
    const paragraphElement = screen.getByText(/5 tasks left/i)
    expect(paragraphElement).toBeInTheDocument()
  })

  test('should render "task" when the number of incomplete asks is one', () => {
    render(<MockTodoFooter num={1} />)
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toBeInTheDocument()
  })
})

// test('should render "task" when the number of incomplete asks is one', () => {
//   render(<MockTodoFooter num={1} />)
//   const paragraphElement = screen.getByText(/1 task left/i)
//   expect(paragraphElement).toBeVisible()
// })

// test('should render "task" when the number of incomplete asks is one', () => {
//   render(<MockTodoFooter num={1} />)
//   const paragraphElement = screen.getByText(/1 task left/i)
//   expect(paragraphElement).toContainHTML('p')
// })

// test('should render "task" when the number of incomplete asks is one', () => {
//   render(<MockTodoFooter num={1} />)
//   const paragraphElement = screen.getByText(/1 task left/i)
//   expect(paragraphElement).toHaveTextContent('1 task left')
// })

// test('should render "task" when the number of incomplete asks is one', () => {
//   render(<MockTodoFooter num={1} />)
//   const paragraphElement = screen.getByText(/1 task left/i)
//   expect(paragraphElement).not.toHaveTextContent('1 taskS left')
// })

// test('should render "task" when the number of incomplete asks is one', () => {
//   render(<MockTodoFooter num={1} />)
//   const paragraphElement = screen.getByText(/1 task left/i)
//   expect(paragraphElement.textContent).toBe('1 task left')
// })
