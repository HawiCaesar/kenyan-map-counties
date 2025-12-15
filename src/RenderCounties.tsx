import { GeoJSON } from 'react-leaflet';
import { counties } from './counties';
import type { Experience } from './data/types';

type RenderCountiesProps = {
  runConsole: (countyName: string) => void;
  selectedExperience: Experience | null;
}

export const RenderCounties = ({ runConsole, selectedExperience }: RenderCountiesProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return counties.map((county: any, index: number) => {
    const isSelected = selectedExperience?.countyName === county.properties?.name;
    
    return (
      <GeoJSON
        key={index}
        data={county}
        style={{
          //fillColor: 'red',
          weight: isSelected ? 5 : 1,
          opacity: 0.5,
          color: isSelected ? 'transparent' : 'blue',
          dashArray: isSelected ? '' : '3',
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
              weight: isSelected ? 5 : 2,
              color: isSelected ? 'transparent' : 'blue',
              dashArray: isSelected ? '' : '3',
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
