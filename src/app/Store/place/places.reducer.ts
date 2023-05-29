import { createReducer, on } from '@ngrx/store';
import { Place } from 'src/app/Interfaces/place';
import * as PlacesActionsTypes from './places.actions';
import * as CountriesActionsTypes from '../country/countries.actions';
import * as CategoriesActionsTypes from '../category/categories.actions';
const initialPlaces: Place[] = [];

export const placesReducer = createReducer(
  initialPlaces,
  on(PlacesActionsTypes.placesLoaded, (state, { places }) => [...places]),
  on(PlacesActionsTypes.placeAdded, (state, { place }) => [...state, place]),
  on(PlacesActionsTypes.placeRemoved, (state, { place }) =>
    state.filter((originalPlace) => place._id != originalPlace._id)
  ),
  on(PlacesActionsTypes.placeUpdated, (state, { place }) =>
    state.map((originalPlace) => {
      if (place._id === originalPlace._id) return place;
      return originalPlace;
    })
  ),
  on(CountriesActionsTypes.CountryUpdated, (state, { country }) =>
    state.map((originalPlace) => {
      if (originalPlace.country._id === country._id)
        return { ...originalPlace, country };
      return originalPlace;
    })
  ),
  on(CategoriesActionsTypes.categoryUpdated, (state, { category }) =>
    state.map((originalPlace) => {
      if (originalPlace.category._id == category._id)
        return { ...originalPlace, category };
      return originalPlace;
    })
  ),
  on(CountriesActionsTypes.CountryRemoved, (state, { country }) =>
    state.filter((place) => place.country._id != country._id)
  ),
  on(CategoriesActionsTypes.categoryRemoved, (state, { category }) =>
    state.filter((place) => place.category._id != category._id)
  )
);
