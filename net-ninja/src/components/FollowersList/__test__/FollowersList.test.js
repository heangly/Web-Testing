import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import FollowersList from '../FollowersList'

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}

describe('FollowersList', () => {
  beforeEach(() => {
    console.log('running by rach test')
  })

  test('test1', async () => {
    render(<MockFollowersList />)
    const followerDivElement = await screen.findByTestId('follower-item-0')

    expect(followerDivElement).toBeInTheDocument()
  })

  test('test2', async () => {
    render(<MockFollowersList />)
    const followerDivElement = await screen.findByTestId('follower-item-0')

    expect(followerDivElement).toBeInTheDocument()
  })

  test('test3', async () => {
    render(<MockFollowersList />)
    const followerDivElement = await screen.findByTestId('follower-item-0')

    expect(followerDivElement).toBeInTheDocument()
  })

  // test('test2', async () => {
  //   render(<MockFollowersList />)
  //   const followerDivElements = await screen.findAllByTestId(/follower-item/i)
  //   expect(followerDivElements).toHaveLength(5)
  // })
})
