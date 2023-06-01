import { ActionReducerMap, createSelector } from '@ngrx/store';
import {
  CategoriesStateShape,
  categoriesReducer,
} from './category/categories.reducer';
import { Category } from '../Interfaces/category';
import { Country } from '../Interfaces/country';
import {
  CountriesListShape,
  countriesReducer,
} from './country/countries.reducer';
import { PlacesListShape, placesReducer } from './place/places.reducer';
import { pieChartDataType, radarChartDataType } from '../Interfaces/chart';

export interface AppState {
  categories: CategoriesStateShape;
  countries: CountriesListShape;
  places: PlacesListShape;
}
export const reducers: ActionReducerMap<AppState> = {
  categories: categoriesReducer,
  countries: countriesReducer,
  places: placesReducer,
};

export const selectCategories = (state: AppState) =>
  state.categories.categoryList;
const categoriesNamesMapper = (state: Category[]) =>
  state.map((category) => category.name);
export const selectCategoriesName = createSelector(
  selectCategories,
  categoriesNamesMapper
);
export const selectCategoriesRequestState = (state: AppState) => ({
  error: state.categories.error,
  waiting: state.categories.waiting,
});
export const numberOfCategories = (state: AppState) =>
  state.categories.categoryList.length;

export const selectCountries = (state: AppState) => state.countries.countryList;
export const selectCountriesName = createSelector(
  selectCountries,
  (state: Country[]) => state.map((country) => country.name)
);
export const selectCountriesRequestState = (state: AppState) => ({
  error: state.countries.error,
  waiting: state.countries.waiting,
});

export const numberOfCountries = (state: AppState) =>
  state.countries.countryList.length;

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
