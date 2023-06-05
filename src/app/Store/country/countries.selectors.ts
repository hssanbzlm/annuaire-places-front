import { createSelector } from '@ngrx/store';
import { Country } from 'src/app/Interfaces/country';
import { AppState } from '..';

export const selectCountries = createSelector(
  (state: AppState) => state.countries.countryList,
  (result) => result
);
export const selectCountriesName = createSelector(
  (state: AppState) => state.countries.countryList,
  (state: Country[]) => state.map((country) => country.name)
);
export const selectCountriesRequestState = createSelector(
  (state: AppState) => ({
    error: state.countries.error,
    waiting: state.countries.waiting,
  }),
  (result) => result
);

export const numberOfCountries = createSelector(
  (state: AppState) => state.countries.countryList.length,
  (result) => result
);
