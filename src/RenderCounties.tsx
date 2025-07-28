import { GeoJSON } from 'react-leaflet';
import { counties } from './counties';

type RenderCountiesProps = {
  runConsole: (countyName: string) => void;
}

export const RenderCounties = ({ runConsole }: RenderCountiesProps) => {
  return counties.map((county: any, index: number) => (
    <GeoJSON
      key={index}
     data={county}
      style={{
        fillColor: 'red',
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      }}
      eventHandlers={{
        mouseover: (e) => {
          const layer = e.target;
          layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.9
          });
          layer.bringToFront();
          runConsole(county);
        },
        mouseout: (e) => {
          const layer = e.target;
          layer.setStyle({
            weight: 2,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
          });
        }
      }}
    />
  ));
};
