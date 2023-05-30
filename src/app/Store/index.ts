import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
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
import { Place } from '../Interfaces/place';

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

export const selectCountries = (state: AppState) => state.countries.countryList;
export const selectCountriesName = createSelector(
  selectCountries,
  (state: Country[]) => state.map((country) => country.name)
);
export const selectCountriesRequestState = (state: AppState) => ({
  error: state.countries.error,
  waiting: state.countries.waiting,
});
export const selectPlaces = (state: AppState) => state.places.placeList;
export const selectRequestState = (state: AppState) => ({
  error: state.places.error,
  waiting: state.places.waiting,
});

export const selectCategoriesRequestState = (state: AppState) => ({
  error: state.categories.error,
  waiting: state.categories.waiting,
});
