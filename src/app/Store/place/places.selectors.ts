import { pieChartDataType } from 'src/app/Interfaces/chart';
import { AppState } from '..';

export const selectPlaces = (state: AppState) => state.places.placeList;
export const selectPlacesRequestState = (state: AppState) => ({
  error: state.places.error,
  waiting: state.places.waiting,
});
export const numberOfPlaces = (state: AppState) =>
  state.places.placeList.length;

export const numberOfPlacesParCountry = (state: AppState) => {
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

export const numberOfPlacesParCategory = (state: AppState) => {
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
