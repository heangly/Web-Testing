interface IProps {
  customer: { firstName: string }
}

const Appointment: React.FC<IProps> = ({ customer }) => {
  return (
    <div>
      <h1>Hello {customer.firstName}</h1>
    </div>
  )
}

export default Appointment
