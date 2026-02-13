import { GeoJSON } from 'react-leaflet';
import { counties } from './counties';

type RenderCountiesProps = {
  runConsole: (countyName: string) => void;
}

export const RenderCounties = ({ runConsole }: RenderCountiesProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return counties.map((county: any, index: number) => {
    
    return (
      <GeoJSON
        key={index}
        data={county}
        style={{
          //fillColor: 'red',
          weight: 1,
          opacity: 0.5,
          color: 'blue',
          dashArray: '3',
          //fillOpacity: 0.7
        }}
        eventHandlers={{
          mouseover: (e) => {
            const layer = e.target;
            layer.setStyle({
              weight: 5,
              color: 'transparent',
              dashArray: '',
              //fillOpacity: 0.9
            });
            layer.bringToFront();
            
          },
          mouseout: (e) => {
            const layer = e.target;
            // Restore to selected or default style
            layer.setStyle({
              weight: 1,
              color: 'blue',
              dashArray: '3',
              //fillOpacity: 0.7
            });
          },
          click: (e) => {
              const map = e.target._map;
              map.fitBounds(e.target.getBounds());
              runConsole(county.properties?.name)
            }
        }}
      />
    );
  });
};
