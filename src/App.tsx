import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'photoswipe/dist/photoswipe.css';
import { RenderCounties } from './RenderCounties';
import { experiences } from './experiences';
import type { Experience } from './data/types';
import MapController from './MapController';
import { PhotoGallery } from './PhotoGallery';
import './App.css';

function App() {
  const runConsole = (countyName: string) => {
    console.log(countyName);
  };

  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleAccordionToggle = (experience: Experience) => {
    // Toggle accordion
    setOpenAccordion(openAccordion === experience.id ? null : experience.id);
    // Also set as selected experience for map marker
    setSelectedExperience(experience);
  };

  const handleKeyDown = (e: React.KeyboardEvent, experience: Experience) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleAccordionToggle(experience);
    }
  };

  return (
    <div>
      <h1 className='text-2xl text-center font-bold my-6'>
        My Roam-antic Experiences in Kenya
      </h1>

      <div className='flex flex-row gap-4'>
        <div className='w-1/2 space-y-2'>
          {experiences.map((experience) => {
            const isOpen = openAccordion === experience.id;
            const photos = experience.photos.slice(0, 15);

            console.log(experience.name, photos.length);

            return (
              <div
                key={experience.id}
                className='border border-gray-200 rounded-lg overflow-hidden'
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleAccordionToggle(experience)}
                  onKeyDown={(e) => handleKeyDown(e, experience)}
                  className='w-full px-5 py-3 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors'
                  aria-expanded={isOpen}
                >
                  <span className='font-semibold text-gray-900'>
                    {experience.name}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className='px-5 py-4 bg-gray-50 border-t border-gray-200 space-y-3'>
                    {/* Description */}
                    <p className='text-sm text-gray-700'>
                      {experience.description}
                    </p>

                    {/* County */}
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                      <span>📍</span>
                      <span className='font-medium'>
                        {experience.countyName} County
                      </span>
                    </div>

                    {/* Visit Date */}
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                      <span>📅</span>
                      <span>Visited: {experience.visitDate}</span>
                    </div>

                    {/* Personal Note */}
                    {experience.personalNote && (
                      <div className='flex items-start gap-2 text-sm text-blue-600 italic'>
                        <span>💡</span>
                        <span>{experience.personalNote}</span>
                      </div>
                    )}

                    {/* Tags */}
                    <div className='flex flex-wrap gap-2 pt-2'>
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className='px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Photo thumbnails + lightbox trigger */}
                    <PhotoGallery photos={photos} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
              selectedExperience={selectedExperience}
            />

            <MapController selectedExperience={selectedExperience} />

            {selectedExperience && (
              <Marker
                position={[
                  selectedExperience.coordinates.lat,
                  selectedExperience.coordinates.lng
                ]}
              >
                <Popup>
                  <div>
                    <h3>{selectedExperience.name}</h3>
                    <p>{selectedExperience.description}</p>
                    <p>{selectedExperience.countyName} County</p>
                    <p>Visited: {selectedExperience.visitDate}</p>
                    {selectedExperience.personalNote && (
                      <p>💡 {selectedExperience.personalNote}</p>
                    )}
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
