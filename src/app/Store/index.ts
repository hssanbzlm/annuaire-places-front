import { ActionReducerMap } from '@ngrx/store';
import {
  CategoriesStateShape,
  categoriesReducer,
} from './category/categories.reducer';

import {
  CountriesListShape,
  countriesReducer,
} from './country/countries.reducer';
import { PlacesListShape, placesReducer } from './place/places.reducer';

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
