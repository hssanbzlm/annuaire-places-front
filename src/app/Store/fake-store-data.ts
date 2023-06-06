export const storeData = {
  places: {
    placeList: [
      {
        _id: '1',
        name: 'California gym',
        category: { _id: '1', name: 'fitness' },
        country: {
          _id: '1',
          name: 'Tunisia',
          continent: 'Africa',
          description: 'country description',
        },
        dateAdded: '06/06/2032',
        description: 'this is description',
        city: 'bardo',
        phone: '90409034',
      },
      {
        _id: '2',
        name: 'Via mercato',
        category: { _id: '2', name: 'restaurant' },
        country: {
          _id: '1',
          name: 'Tunisia',
          continent: 'Africa',
          description: 'country description',
        },
        dateAdded: '07/06/2023',
        description: 'this is description',
        city: 'Lac 2',
        phone: '90409034',
      },
      {
        _id: '3',
        name: 'Delice',
        category: { _id: '2', name: 'restaurant' },
        country: {
          _id: '2',
          name: 'Italy',
          continent: 'Europe',
          description: 'country description',
        },
        dateAdded: '08/06/2023',
        description: 'this is description',
        city: 'Rome',
        phone: '90409034',
      },
    ],
    error: null,
    waiting: false,
  },
  countries: {
    countryList: [
      {
        _id: '1',
        name: 'Tunisia',
        continent: 'Africa',
        description: 'country description',
      },
      {
        _id: '2',
        name: 'Italy',
        continent: 'Europe',
        description: 'country description',
      },
    ],
    error: null,
    waiting: false,
  },
  categories: {
    categoryList: [
      { _id: '1', name: 'fitness' },
      { _id: '2', name: 'restaurant' },
    ],
    error: null,
    waiting: false,
  },
};
