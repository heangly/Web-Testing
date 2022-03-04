import './App.css'
import Appointment from './components/Appoinment/Appointment'

function App() {
  return (
    <div className='App'>
      <Appointment customer={{ firstName: 'Ashley' }} />
    </div>
  )
}

export default App
