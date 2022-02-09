import { screen, render, fireEvent } from '@testing-library/react'
import AddInput from '../AddInput'

const mockedSetTodo = jest.fn()

describe('AddInput', () => {
  test('should render input element', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />)
    const inputElement = screen.getByRole('textbox', {
      placeholder: /Add a new task here.../i
    })
    expect(inputElement).toBeInTheDocument()
  })

  test('should be able to type in input', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />)
    const inputElement = screen.getByRole('textbox', {
      placeholder: /Add a new task here.../i
    })
    fireEvent.change(inputElement, { target: { value: 'Go Grocery Shopping' } })
    expect(inputElement.value).toBe('Go Grocery Shopping')
  })

  test('should have empty input when add button is clicked', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />)
    const inputElement = screen.getByRole('textbox', {
      placeholder: /Add a new task here.../i
    })
    const buttonElement = screen.getByRole('button', { name: /add/i })

    fireEvent.change(inputElement, {
      target: { value: 'Go Grocery Shopping' }
    })

    fireEvent.click(buttonElement)

    expect(inputElement.value).toBe('')
  })
})
