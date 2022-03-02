import './App.css'
import { Person } from './Person'
import { SideBar } from './SideBar'

function App() {
  return (
    <div className='App'>
      <Person name='Heang' />
      <SideBar
        items={[
          {
            name: 'test',
            href: '/test'
          }
        ]}
      />
    </div>
  )
}

export default App
