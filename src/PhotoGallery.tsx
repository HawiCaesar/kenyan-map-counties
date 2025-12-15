import { Gallery, Item } from 'react-photoswipe-gallery';
import type { Photo } from './data/types';

type PhotoGalleryProps = {
  photos: Photo[];
};

export const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  if (photos.length === 0) return null;

  let openGallery: ((e: React.MouseEvent<Element, MouseEvent>) => void) | null =
    null;

  return (
    <Gallery>
      <div className='pt-3 space-y-2'>
        <div className='flex gap-2 overflow-x-auto'>
          {photos.map((photo, index) => (
            <Item
              key={photo.url}
              original={photo.url}
              thumbnail={photo.url}
              width={photo.width || 1600}
              height={photo.height || 1067}
              caption={photo.caption}
            >
              {({ ref, open }) => {
                if (index === 0) openGallery = open;

                return index < 3 ? (
                  <img
                    ref={ref}
                    onClick={open}
                    src={photo.url}
                    alt={photo.caption}
                    className='h-16 w-24 object-cover rounded cursor-pointer border border-gray-200 hover:opacity-80 transition'
                  />
                ) : (
                  <span ref={ref} className='hidden' />
                );
              }}
            </Item>
          ))}
        </div>

        {/* "See all images" button */}
        <button
          type='button'
          onClick={(e) => openGallery?.(e)}
          className='text-sm font-medium text-blue-600 hover:text-blue-700 underline'
        >
          See all {photos.length} images
        </button>
      </div>
    </Gallery>
  );
};
