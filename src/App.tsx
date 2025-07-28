import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './App.css'
import { RenderCounties } from './RenderCounties'


function App() {

  const runConsole = (countyName: string) => {
    console.log(countyName)
  }

  return (
    <>
      <div>
        
        <MapContainer 
          center={[0.0236, 37.9062]} 
          zoom={6.4} 
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <RenderCounties runConsole={runConsole} />
        </MapContainer>
      </div>
    </>
  )
}

export default App
