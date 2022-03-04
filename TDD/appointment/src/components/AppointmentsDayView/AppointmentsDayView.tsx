export interface IProps {
  appointments: { startsAt: number }[]
}

const AppointmentsDayView: React.FC<IProps> = ({ appointments }) => {
  return (
    <div data-testid='appointmentsDayView'>
      <ol data-testid='ol'>
        {appointments.map((appointment) => (
          <li></li>
        ))}
      </ol>
    </div>
  )
}

export default AppointmentsDayView
