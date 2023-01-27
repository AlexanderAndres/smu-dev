import Map from './components/map/Map'
//import { useEffect } from 'react'
//import FloatingNavbar from './components/bar/FloatingNavbar'
//import NewMap from './components/map/NewMap'
//import { getUserMarkers } from './services/getUserMarkers'
import './App.css'

function App() {

  const items = [
    { id: 1, url: '/', label: 'Home' },
    { id: 2, url: '/', label: 'Dashboard' },
    { id: 3, url: '/', label: 'Filters' },
    { id: 4, url: '/', label: 'Users' },
  ]
  //<FloatingNavbar items={items} />

  return (
    <>
      <Map />
    </>
  )
}

export default App
