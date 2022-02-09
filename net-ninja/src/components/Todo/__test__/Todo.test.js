import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Todo from '../Todo'

const MockedTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTask = (tasks) => {
  const inputElement = screen.getByRole('textbox', {
    placeholder: /add a new task here.../i
  })
  const buttonElement = screen.getByRole('button', { name: /add/i })

  for (const task of tasks) {
    userEvent.type(inputElement, task)
    userEvent.click(buttonElement)
  }
}

describe('Todo', () => {
  test('sth', () => {
    render(<MockedTodo />)
    addTask(['go grocery shopping'])
    const divElement = screen.getByText(/go grocery shopping/i)
    expect(divElement).toBeInTheDocument()
  })

  test('sth2', () => {
    render(<MockedTodo />)
    const tasks = ['go grocery shopping', 'pet my cat', 'wash my hands']
    addTask(tasks)
    for (const task of tasks) {
      const divElements = screen.getByText(task)
      expect(divElements).toBeInTheDocument()
    }
  })

  test('sth3', () => {
    render(<MockedTodo />)
    const tasks = ['go grocery shopping', 'pet my cat', 'wash my hands']
    addTask(tasks)
    for (const task of tasks) {
      const divElement = screen.getByText(task)
      expect(divElement).not.toHaveClass('todo-item-active')
    }
  })

  test('sth4', () => {
    render(<MockedTodo />)
    const tasks = ['go grocery shopping', 'pet my cat', 'wash my hands']
    addTask(tasks)
    for (const task of tasks) {
      const divElement = screen.getByText(task)
      userEvent.click(divElement)
      expect(divElement).toHaveClass('todo-item-active')
    }
  })
})
