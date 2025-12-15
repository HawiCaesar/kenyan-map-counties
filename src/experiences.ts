import type { Experience } from "./data/types";

// Helper to build Supabase storage URLs
const SUPABASE_PROJECT_ID = import.meta.env.VITE_SUPABASE_PROJECT_ID;
console.log(SUPABASE_PROJECT_ID, '£@@@£');
const getStorageUrl = (path: string) =>
  `https://${SUPABASE_PROJECT_ID}.supabase.co/storage/v1/object/public/experiences/${path}`;

export const experiences: Experience[] = [
  {
    id: 'meru-national-park-kora-national-park-2023',
    countyCode: 32,
    countyName: 'Meru',
    name: 'Meru National Park & Kora National Park',
    type: 'camping-and-safari',
    coordinates: {
      lat: 0.1646,
      lng: 38.1953
    },
    visitDate: '2020-10-09',
    description: 'Experience the best of Kenya\'s wildlife in two iconic national parks',
    personalNote: 'This is quite an adventurous trip! We saw giraffes and buffaloes in the wild. But its pretty dry there and very hot. Meru National park has a swimming pool preheated by the sun. Kora National park is a bit more remote and less touristy. We camped with KWF soliders and they were very friendly and took us to the infamous George Adamson grave! With a hike afterward. Did I mention we got 2 punctures despite using an overland truck?',
    photos: [
      {
        url: getStorageUrl('meru/meru&kora_national_park/20201009152307_IMG_5525.JPG'),
        caption: 'Meru National Park',
        isHero: true
      },
      {
        url: getStorageUrl('meru/meru&kora_national_park/20201010062726_IMG_5584.JPG'),
        caption: 'Meru National Park'
      },
      {
        url: getStorageUrl('meru/meru&kora_national_park/20201010063913_IMG_5604.JPG'),
        caption: 'Meru National Park'
      },
      {
        url: getStorageUrl('meru/meru&kora_national_park/20201011093039_IMG_6219.JPG'),
        caption: 'Kora National Park'
      },
      {
        url: getStorageUrl('meru/meru&kora_national_park/20201011093044_IMG_6220.JPG'),
        caption: 'Kora National Park'
      }
    ],
    tags: ['national-park', 'safari', 'camping']
  },
  // Add more experiences...

  {
    id: 'homabay-lake-victoria-2025',
    countyCode: 40,
    countyName: 'Homa Bay',
    name: 'Homabay & Lake Victoria',
    type: 'attraction',
    coordinates: {
      lat: -0.52731,
      lng: 34.45714
    },
    visitDate: '2025-01-01',
    description: 'Experience the beauty of Lake Victoria',
    personalNote: 'The best time to visit is during the dry season, from June to October.',
    photos: [
      {
        url: getStorageUrl('homabay/victoria_sands_lodge/20250328_151046.jpg'),
        caption: 'Lake Victoria',
        width: 1880,
        height: 4080
      },
      {
        url: getStorageUrl('homabay/victoria_sands_lodge/20250328_152009.jpg'),
        caption: 'Lake Victoria',
        width: 4080,
        height: 1884
      },
      {
        url: getStorageUrl('homabay/victoria_sands_lodge/20250329_141443.jpg'),
        caption: 'Lake Victoria',
        width: 4080,
        height: 1884
      },
      {
        url: getStorageUrl('homabay/victoria_sands_lodge/20250328_175808.jpg'),
        caption: 'Lake Victoria',
        width: 3768,
        height: 8160
      },
      {
        url: getStorageUrl('homabay/victoria_sands_lodge/20250329_093026.jpg'),
        caption: 'Lake Victoria',
        width: 4080,
        height: 1884
      },
      {
        url: getStorageUrl('homabay/victoria_sands_lodge/20250329_103346.jpg'),
        caption: 'Lake Victoria',
        width: 1884,
        height: 4080
      },
      {
        url: getStorageUrl('homabay/victoria_sands_lodge/20250329_103547.jpg'),
        caption: 'Lake Victoria',
        width: 4080,
        height: 1884
      },
      {
        url: getStorageUrl('homabay/victoria_sands_lodge/20250329_105052.jpg'),
        caption: 'Lake Victoria',
        width: 1884,
        height: 4080
      },
      {
        url: getStorageUrl('homabay/victoria_sands_lodge/20250329_145338.jpg'),
        caption: 'Lake Victoria',
        width: 1884,
        height: 4080
      },
      {
        url: getStorageUrl('homabay/victoria_sands_lodge/20250329_171922.jpg'),
        caption: 'Lake Victoria',
        width: 1884,
        height: 4080
      },
      {
        url: getStorageUrl('homabay/victoria_sands_lodge/20250329_172643(0).jpg'),
        caption: 'Lake Victoria',
        width: 1884,
        height: 4080
      },
      {
        url: getStorageUrl('homabay/victoria_sands_lodge/20250329_173816.jpg'),
        caption: 'Lake Victoria',
        width: 1884,
        height: 4080
      },
      {
        url: getStorageUrl('homabay/victoria_sands_lodge/20250329_184503(0).jpg'),
        caption: 'Lake Victoria',
        width: 1884,
        height: 4080
      },
      {
        url: getStorageUrl('homabay/victoria_sands_lodge/20250329_190551.jpg'),
        caption: 'Lake Victoria',
        width: 3060,
        height: 4080
      }
    ],
    tags: ['lake', 'nature', 'cultural']
  }
];