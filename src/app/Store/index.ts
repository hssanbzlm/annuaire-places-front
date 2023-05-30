import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { categoriesReducer } from './category/categories.reducer';
import { Category } from '../Interfaces/category';
import { Country } from '../Interfaces/country';
import { countriesReducer } from './country/countries.reducer';
import { PlacesListShape, placesReducer } from './place/places.reducer';
import { Place } from '../Interfaces/place';

export interface AppState {
  categories: Category[];
  countries: Country[];
  places: PlacesListShape;
}
export const reducers: ActionReducerMap<AppState> = {
  categories: categoriesReducer,
  countries: countriesReducer,
  places: placesReducer,
};

export const selectCategories = (state: AppState) => state.categories;
const categoriesNamesMapper = (state: Category[]) =>
  state.map((category) => category.name);
export const selectCategoriesName = createSelector(
  selectCategories,
  categoriesNamesMapper
);

export const selectCountries = (state: AppState) => state.countries;
export const selectCountriesName = createSelector(
  selectCountries,
  (state: Country[]) => state.map((country) => country.name)
);
export const selectPlaces = (state: AppState) => state.places.placeList;
export const selectRequestState = (state: AppState) => ({
  error: state.places.error,
  waiting: state.places.waiting,
});
