import {
  ListingsParCountry,
  pieChartDataType,
  radarChartDataType,
} from '../Interfaces/chart';
import { AppState } from '../Store';

export const numberOfCategoriesParCountry = (state: AppState) => {
  let result: radarChartDataType = {
    labels: [...state.categories.categoryList.map((c) => c.name)],
    datasets: [{ data: [], label: '' }],
  };
  state.countries.countryList.forEach((country, index) => {
    result.datasets[index] = { label: country.name, data: [] };
    state.categories.categoryList.forEach((category) => {
      let sum = 0;
      state.places.placeList.forEach((place) => {
        if (
          place.category.name == category.name &&
          place.country.name == country.name
        ) {
          sum++;
        }
      });
      result.datasets[index].data.push(sum);
    });
  });
  return result;
};

export const numberOfPlacesParCountryHelper = (state: AppState) => {
  let result: pieChartDataType = { labels: [], datasets: [{ data: [] }] };
  state.countries.countryList.forEach((country) => {
    let acc = 0;
    result.labels.push(country.name);
    state.places.placeList.forEach((place) => {
      if (place.country.name == country.name) {
        acc++;
      }
    });
    result.datasets[0].data.push(acc);
  });
  return result;
};

export const numberOfPlacesParCategoryHelper = (state: AppState) => {
  let result: pieChartDataType = { labels: [], datasets: [{ data: [] }] };
  state.categories.categoryList.forEach((category) => {
    let acc = 0;
    result.labels.push(category.name);
    state.places.placeList.forEach((place) => {
      if (place.category.name == category.name) {
        acc++;
      }
    });
    result.datasets[0].data.push(acc);
  });
  return result;
};

export const numberOfListingParCountryHelper = (state: AppState) => {
  return state.places.placeList.reduce((acc: ListingsParCountry[], curr) => {
    let index = acc.findIndex((v) => v.country == curr.country.name);
    if (index > -1) {
      acc[index].listings++;
    } else {
      acc.push({ country: curr.country.name, listings: 1 });
    }
    return acc;
  }, []);
};

export const comparePlaceByDate = (state: AppState) => {
  return [...state.places.placeList].sort((a, b) => {
    if (new Date(a.dateAdded).getTime() < new Date(b.dateAdded).getTime()) {
      return 1;
    } else if (
      new Date(a.dateAdded).getTime() > new Date(b.dateAdded).getTime()
    ) {
      return -1;
    } else return 0;
  });
};
