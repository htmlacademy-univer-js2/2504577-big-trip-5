import { nanoid } from 'nanoid';

const mockDestinations = [
  {
    id: '1',
    name: 'Chamonix',
    description:
      'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=1',
        description: 'picture description',
      },
      {
        src: 'https://loremflickr.com/248/152?random=2',
        description: 'picture description',
      },
    ],
  },
  {
    id: '2',
    name: 'Canada',
    description:
      'Canada is a parliamentary democracy and a constitutional monarchy in the Westminster tradition.',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=3',
        description: 'picture description',
      },
      {
        src: 'https://loremflickr.com/248/152?random=4',
        description: 'picture description',
      },
    ],
  },
  {
    id: '3',
    name: 'Seoul',
    description:
      'Seoul, the capital of South Korea, sits on the Han River (Korea) in the country\'s northwest situated about 30 miles (~50 km) south of the de-militarized zone (DMZ).',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=5',
        description: 'picture description',
      },
      {
        src: 'https://loremflickr.com/248/152?random=6',
        description: 'picture description',
      },
    ],
  },
];

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '4d1a1748-8e01-4fd4-ba74-301a45088c30',
        title: 'Upgrade to a business class',
        price: 57,
      },
      {
        id: '31796b44-6b50-432b-8277-79c22972f331',
        title: 'Choose the radio station',
        price: 99,
      },
      {
        id: '247fb067-74b7-4531-b50d-e2e2ef1effc7',
        title: 'Choose temperature',
        price: 62,
      },
      {
        id: '3fc56be0-4ab3-40c5-a3ef-7be7898362b4',
        title: 'Drive quickly, I\'m in a hurry',
        price: 136,
      },
      {
        id: 'e39f1feb-cbe7-4ea5-83da-bcdac5c041ba',
        title: 'Drive slowly',
        price: 50,
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        id: '6bc6a85c-1c40-4165-a777-3d0e1695212a',
        title: 'Infotainment system',
        price: 178,
      },
      {
        id: '3b41c036-667d-42da-9b4b-2bcd13fc135d',
        title: 'Order meal',
        price: 168,
      },
      {
        id: '2cf71f36-1d4a-400e-af1e-642cecfbbbbb',
        title: 'Choose seats',
        price: 174,
      },
    ],
  },
  {
    type: 'train',
    offers: [
      {
        id: '8a04ff1b-a35c-4466-8474-5f1d7c6a97b1',
        title: 'Book a taxi at the arrival point',
        price: 180,
      },
      {
        id: '8eafb54e-d6e4-46f7-830e-5c4d0e5f0e68',
        title: 'Order a breakfast',
        price: 194,
      },
      {
        id: '2db682bd-2eae-4ee5-9359-8367f9cb9398',
        title: 'Wake up at a certain time',
        price: 60,
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: '6247af86-1b75-4c78-8a0f-b0ef82abe3cb',
        title: 'Choose meal',
        price: 34,
      },
      {
        id: '01748cd4-4694-4f56-a04e-ecd9da6820bc',
        title: 'Choose seats',
        price: 44,
      },
      {
        id: '3de9e430-f4b9-4d8c-a833-fc1f01adc59e',
        title: 'Upgrade to comfort class',
        price: 131,
      },
      {
        id: 'dad90b1c-3b56-4790-9227-67327a2a25de',
        title: 'Upgrade to business class',
        price: 36,
      },
      {
        id: '0c41ddd4-32a1-4580-91f4-5a1d70066f1b',
        title: 'Add luggage',
        price: 126,
      },
      {
        id: 'b3a7903c-3a8c-40ca-ac4e-002939b5b46d',
        title: 'Business lounge',
        price: 182,
      },
    ],
  },
  {
    type: 'check-in',
    offers: [
      {
        id: '082ea549-de89-4444-b1e6-3d53d47db14d',
        title: 'Choose the time of check-in',
        price: 190,
      },
      {
        id: 'b962e68d-d425-4feb-8eb4-4e78cc485817',
        title: 'Choose the time of check-out',
        price: 34,
      },
      {
        id: '86df7b54-a176-41d1-87ba-ae3b3758622e',
        title: 'Add breakfast',
        price: 34,
      },
      {
        id: '6f76b5f6-4d6b-4626-90b4-db9973e40f73',
        title: 'Laundry',
        price: 159,
      },
      {
        id: '74d43b2f-aaa1-4cb1-88be-357216a8f0ff',
        title: 'Order a meal from the restaurant',
        price: 53,
      },
    ],
  },
  {
    type: 'sightseeing',
    offers: [],
  },
  {
    type: 'ship',
    offers: [
      {
        id: '12ed89ba-fd0e-4b60-b3ae-4ef3cd9b65b3',
        title: 'Choose meal',
        price: 44,
      },
      {
        id: 'b2fb7191-a169-48a5-98f8-27e3a6be970f',
        title: 'Choose seats',
        price: 134,
      },
      {
        id: 'b403bfd4-05bf-48ba-a5bb-5c476b79110c',
        title: 'Upgrade to comfort class',
        price: 35,
      },
      {
        id: '3292b9a2-da72-44c7-b293-99fbd8343b72',
        title: 'Upgrade to business class',
        price: 185,
      },
      {
        id: 'fb3e7208-0f38-49ed-a77f-177f9d05aadb',
        title: 'Add luggage',
        price: 41,
      },
      {
        id: 'd5b1f1af-a598-4296-bd47-5c400618bb5e',
        title: 'Business lounge',
        price: 87,
      },
    ],
  },
  {
    type: 'drive',
    offers: [
      {
        id: '2645ee55-1db9-4844-a6d8-401bff624d80',
        title: 'With automatic transmission',
        price: 99,
      },
      {
        id: '02986361-da16-4a4a-824d-94e507b85866',
        title: 'With air conditioning',
        price: 185,
      },
    ],
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: '62f58500-a355-4bc5-a275-b0d9e2ae46e5',
        title: 'Choose live music',
        price: 165,
      },
      {
        id: '8b608ec9-a839-42b1-8384-8917a9ec70ca',
        title: 'Choose VIP area',
        price: 56,
      },
    ],
  },
];

const mockEvents = [
  {
    type: 'flight',
    basePrice: '160',
    dateFrom: '2019-07-10T10:02:00.000Z',
    dateTo: '2019-07-10T12:47:00.000Z',
    destination: '2',
    offers: [
      '6247af86-1b75-4c78-8a0f-b0ef82abe3cb',
      'dad90b1c-3b56-4790-9227-67327a2a25de',
    ],
  },
  {
    type: 'taxi',
    basePrice: '1100',
    dateFrom: '2019-07-11T08:13:00.000Z',
    dateTo: '2019-07-11T13:07:00.000Z',
    destination: '1',
    offers: ['4d1a1748-8e01-4fd4-ba74-301a45088c30'],
  },
  {
    type: 'flight',
    basePrice: '1000',
    dateFrom: '2020-04-21T17:55:00.000Z',
    dateTo: '2020-04-22T05:35:00.000Z',
    destination: '3',
    offers: [
      'b3a7903c-3a8c-40ca-ac4e-002939b5b46d',
      '01748cd4-4694-4f56-a04e-ecd9da6820bc',
    ],
  },
];

function getEvents() {
  return mockEvents.map((event) => ({
    id: nanoid(),
    ...event,
    isFavorite: false,
  }));
}

export { mockDestinations, mockOffers, getEvents };
