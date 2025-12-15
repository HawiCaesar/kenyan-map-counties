import { useMap } from 'react-leaflet'
import { useEffect } from 'react'
import type { Experience } from './data/types'

type MapControllerProps = {
  selectedExperience: Experience | null
}

const MapController = ({ selectedExperience }: MapControllerProps) => {
  const map = useMap()

  useEffect(() => {
    if (selectedExperience) {
      // Smoothly fly to the coordinates with zoom level 10
      map.flyTo(
        [selectedExperience.coordinates.lat, selectedExperience.coordinates.lng],
        10, // zoom level
        {
          duration: 1.0 // animation duration in seconds
        }
      )
    }
  }, [selectedExperience, map])

  return null
}

export default MapController