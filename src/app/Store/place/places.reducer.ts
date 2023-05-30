import { createReducer, on } from '@ngrx/store';
import { Place } from 'src/app/Interfaces/place';
import * as PlacesActionsTypes from './places.actions';
import * as CountriesActionsTypes from '../country/countries.actions';
import * as CategoriesActionsTypes from '../category/categories.actions';

export interface PlacesListShape {
  placeList: Place[];
  error: null | string;
  waiting: boolean;
}

const initialPlacesState: PlacesListShape = {
  placeList: [],
  error: null,
  waiting: false,
};

export const placesReducer = createReducer(
  initialPlacesState,
  on(PlacesActionsTypes.placesLoaded, (state, { places }) => ({
    error: null,
    waiting: false,
    placeList: [...places],
  })),
  on(PlacesActionsTypes.addPlace, (state) => ({
    ...state,
    waiting: true,
    error: null,
  })),
  on(PlacesActionsTypes.placeAdded, (state, { place }) => ({
    error: null,
    waiting: false,
    placeList: [...state.placeList, place],
  })),
  on(PlacesActionsTypes.removePlace, (state) => ({
    ...state,
    waiting: true,
    error: null,
  })),
  on(PlacesActionsTypes.placeRemoved, (state, { place }) => ({
    error: null,
    waiting: false,
    placeList: state.placeList.filter(
      (originalPlace) => place._id != originalPlace._id
    ),
  })),
  on(PlacesActionsTypes.updatePlace, (state) => ({
    ...state,
    waiting: true,
    error: null,
  })),
  on(PlacesActionsTypes.placeUpdated, (state, { place }) => ({
    error: null,
    waiting: false,
    placeList: state.placeList.map((originalPlace) => {
      if (place._id === originalPlace._id) return place;
      return originalPlace;
    }),
  })),
  on(CountriesActionsTypes.CountryUpdated, (state, { country }) => ({
    error: null,
    waiting: false,
    placeList: state.placeList.map((originalPlace) => {
      if (originalPlace.country._id === country._id)
        return { ...originalPlace, country };
      return originalPlace;
    }),
  })),
  on(CategoriesActionsTypes.categoryUpdated, (state, { category }) => ({
    error: null,
    waiting: false,
    placeList: state.placeList.map((originalPlace) => {
      if (originalPlace.category._id == category._id)
        return { ...originalPlace, category };
      return originalPlace;
    }),
  })),
  on(CountriesActionsTypes.CountryRemoved, (state, { country }) => ({
    error: null,
    waiting: false,

    placeList: state.placeList.filter(
      (place) => place.country._id != country._id
    ),
  })),
  on(CategoriesActionsTypes.categoryRemoved, (state, { category }) => ({
    error: null,
    waiting: false,
    placeList: state.placeList.filter(
      (place) => place.category._id != category._id
    ),
  })),
  on(PlacesActionsTypes.placeError, (state, { payload }) => ({
    ...state,
    error: payload,
    waiting: false,
  }))
);
