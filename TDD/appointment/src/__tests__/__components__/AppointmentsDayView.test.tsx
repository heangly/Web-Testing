import { screen, render } from '@testing-library/react'
import AppointmentsDayView from '../../components/AppointmentsDayView/AppointmentsDayView'

describe('AppointmentsDayView', () => {
  test('renders a div with the right id', () => {
    render(<AppointmentsDayView appointments={[]} />)
    const div = screen.getByTestId('appointmentsDayView')
    expect(div).not.toBeNull()
  })

  test('renders multiple appointments in an ol element', () => {
    const today = new Date()
    const appointments: { startsAt: number }[] = [
      { startsAt: today.setHours(12, 0) },
      { startsAt: today.setHours(13, 0) }
    ]
    render(<AppointmentsDayView appointments={appointments} />)
    const ol = screen.getByTestId('ol')
    expect(ol.childElementCount).toBe(2)
  })
})
