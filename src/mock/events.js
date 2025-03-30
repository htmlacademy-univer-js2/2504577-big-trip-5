import { nanoid } from 'nanoid';

const mockDestinations = [
  {
    id: '1',
    name: 'Chamonix',
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=1',
        description: 'picture description'
      },
      {
        src: 'https://loremflickr.com/248/152?random=2',
        description: 'picture description'
      }
    ]
  },
  {
    id: '2',
    name: 'Canada',
    description: 'Canada is a parliamentary democracy and a constitutional monarchy in the Westminster tradition.',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=3',
        description: 'picture description'
      },
      {
        src: 'https://loremflickr.com/248/152?random=4',
        description: 'picture description'
      }
    ]
  },
  {
    id: '3',
    name: 'Seoul',
    description: 'Seoul, the capital of South Korea, sits on the Han River (Korea) in the country\'s northwest situated about 30 miles (~50 km) south of the de-militarized zone (DMZ).',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=5',
        description: 'picture description'
      },
      {
        src: 'https://loremflickr.com/248/152?random=6',
        description: 'picture description'
      }
    ]
  }
];

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '1',
        title: 'Upgrade to a business class',
        price: 120
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: '1',
        title: 'Add luggage',
        price: 50
      },
      {
        id: '2',
        title: 'Switch to comfort',
        price: 80
      },
      {
        id: '3',
        title: 'Add meal',
        price: 15
      },
      {
        id: '4',
        title: 'Choose seats',
        price: 5
      },
      {
        id: '5',
        title: 'Travel by train',
        price: 40
      }
    ]
  }
];

const mockEvents = [
  {
    type: 'flight',
    basePrice: '160',
    dateFrom: '2019-07-10T10:02:00.000Z',
    dateTo: '2019-07-10T12:47:00.000Z',
    destination: '2',
    offers: [
      '1',
      '3'
    ]
  },
  {
    type: 'taxi',
    basePrice: '1100',
    dateFrom: '2019-07-11T08:13:00.000Z',
    dateTo: '2019-07-11T13:07:00.000Z',
    destination: '1',
    offers: [
      '1'
    ]
  },
  {
    type: 'flight',
    basePrice: '1000',
    dateFrom: '2020-04-21T17:55:00.000Z',
    dateTo: '2020-04-22T05:35:00.000Z',
    destination: '3',
    offers: [
      '3',
      '4'
    ]
  }
];

function getEvents() {
  return mockEvents.map((event) => ({
    id: nanoid(),
    ...event,
    isFavorite: false
  }));
}

export {mockDestinations, mockOffers, getEvents};
