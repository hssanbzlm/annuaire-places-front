import { createReducer, on } from '@ngrx/store';
import * as CountriesActionsTypes from './countries.actions';
import { Country } from 'src/app/Interfaces/country';

const initialCountries: Country[] = [];

export const countriesReducer = createReducer(
  initialCountries,
  on(CountriesActionsTypes.CountriesLoaded, (state, { countries }) => [
    ...countries,
  ]),
  on(CountriesActionsTypes.CountryAdded, (state, { country }) => [
    ...state,
    country,
  ]),
  on(CountriesActionsTypes.CountryRemoved, (state, { country }) =>
    state.filter((originalCountry) => country._id != originalCountry._id)
  ),
  on(CountriesActionsTypes.CountryUpdated, (state, { country }) =>
    state.map((originalCountry) => {
      if (country._id === originalCountry._id) return country;
      return originalCountry;
    })
  )
);
