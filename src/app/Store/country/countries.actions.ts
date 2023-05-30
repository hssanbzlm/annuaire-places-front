import { createAction, props } from '@ngrx/store';
import { Country } from 'src/app/Interfaces/country';

export const loadCountries = createAction('[Countries] Load Countries');
export const CountriesLoaded = createAction(
  '[Countries] Countries loaded',
  props<{ countries: Country[] }>()
);
export const updateCountry = createAction(
  '[Countries] Update Country',
  props<{ country: Country }>()
);

export const CountryUpdated = createAction(
  '[Countries] Country updated',
  props<{ country: Country }>()
);
export const removeCountry = createAction(
  '[Countries] Remove Country',
  props<{ country: Country }>()
);
export const CountryRemoved = createAction(
  '[Countries] Country removed',
  props<{ country: Country }>()
);
export const addCountry = createAction(
  '[Countries] Add Country',
  props<{ country: Country }>()
);

export const CountryAdded = createAction(
  '[Countries] Country added',
  props<{ country: Country }>()
);
export const CountryError = createAction(
  '[Countries] Country error',
  props<{ payload: string }>()
);
