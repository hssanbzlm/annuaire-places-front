import { createSelector } from '@ngrx/store';
import { Country } from 'src/app/Interfaces/country';
import { AppState } from '..';

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
