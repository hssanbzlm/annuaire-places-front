import { createReducer, on } from '@ngrx/store';
import * as CountriesActionsTypes from './countries.actions';
import { Country } from 'src/app/Interfaces/country';

export interface CountriesListShape {
  countryList: Country[];
  error: null | string;
  waiting: boolean;
}
const initialCountriesState: CountriesListShape = {
  countryList: [],
  error: null,
  waiting: false,
};
export const countriesReducer = createReducer(
  initialCountriesState,
  on(CountriesActionsTypes.countriesLoaded, (state, { countries }) => ({
    error: null,
    waiting: false,
    countryList: countries,
  })),
  on(CountriesActionsTypes.countryAdded, (state, { country }) => ({
    error: null,
    waiting: false,
    countryList: [...state.countryList, country],
  })),
  on(CountriesActionsTypes.addCountry, (state) => ({
    ...state,
    waiting: true,
    error: null,
  })),
  on(CountriesActionsTypes.removeCountry, (state) => ({
    ...state,
    error: null,
    waiting: true,
  })),
  on(CountriesActionsTypes.countryRemoved, (state, { country }) => ({
    error: null,
    waiting: false,
    countryList: state.countryList.filter(
      (originalCountry) => country._id != originalCountry._id
    ),
  })),
  on(CountriesActionsTypes.addCountry, (state) => ({
    ...state,
    error: null,
    waiting: true,
  })),

  on(CountriesActionsTypes.countryUpdated, (state, { country }) => ({
    waiting: false,
    error: null,
    countryList: state.countryList.map((originalCountry) => {
      if (country._id === originalCountry._id) return country;
      return originalCountry;
    }),
  })),
  on(CountriesActionsTypes.updateCountry, (state) => ({
    ...state,
    error: null,
    waiting: true,
  })),
  on(CountriesActionsTypes.countryError, (state, { payload }) => ({
    ...state,
    error: payload,
    waiting: false,
  }))
);
