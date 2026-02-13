import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { RenderCounties } from './RenderCounties';

import './App.css';

function App() {
  const runConsole = (countyName: string) => {
    console.log(countyName);
  };


  return (
    <div>
      <div className='flex flex-row gap-4'>
        <div className='w-1/2'>
          <MapContainer
            center={[0.0236, 37.9062]}
            zoom={6.4}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <RenderCounties
              runConsole={runConsole}
            />

            
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
