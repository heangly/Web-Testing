import { screen, render } from '@testing-library/react'
import Appointment from '../../components/Appoinment/Appointment'

describe('Appointment', () => {
  const customers: { firstName: string }[] = [
    { firstName: 'Ashley' },
    { firstName: 'Jordan' }
  ]

  customers.forEach((customer) => {
    test(`renders customer firstName as ${customer.firstName}`, () => {
      render(<Appointment customer={customer} />)
      expect(document.body.textContent).toMatch(customer.firstName)
    })
  })
})
