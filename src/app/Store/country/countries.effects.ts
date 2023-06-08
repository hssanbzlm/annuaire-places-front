import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryDataService } from 'src/app/services/country-data.service';
import * as CountriesActionsTypes from './countries.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesEffects {
  constructor(
    private actions$: Actions,
    private countryService: CountryDataService
  ) {}

  loadCountries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CountriesActionsTypes.loadCountries),
      mergeMap(() => {
        return this.countryService.getCountries().pipe(
          map(({ data }) => {
            return {
              type: '[Countries] Countries loaded',
              countries: data,
            };
          }),
          catchError(() =>
            of({
              type: '[Countries] Country error',
              payload: 'Error while loading countries',
            })
          )
        );
      })
    );
  });

  addcountry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CountriesActionsTypes.addCountry),
      mergeMap((v) => {
        return this.countryService.addCountry(v.country).pipe(
          map(({ data }) => {
            return {
              type: '[Countries] Country added',
              country: data,
            };
          }),
          catchError(() =>
            of({
              type: '[Countries] Country error',
              payload: 'Error while adding new country',
            })
          )
        );
      })
    );
  });

  removecountry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CountriesActionsTypes.removeCountry),
      mergeMap((v) => {
        return this.countryService.removeCountry(v.country).pipe(
          map(({ data }) => {
            return {
              type: '[Countries] Country removed',
              country: data,
            };
          }),
          catchError(() =>
            of({
              type: '[Countries] Country error',
              payload: 'Error while removing this country',
            })
          )
        );
      })
    );
  });

  updatecountry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CountriesActionsTypes.updateCountry),
      mergeMap((v) => {
        return this.countryService.updateCountry(v.country).pipe(
          map(({ data }) => {
            return {
              type: '[Countries] Country updated',
              country: data,
            };
          }),
          catchError(() =>
            of({
              type: '[Countries] Country error',
              payload: 'Error while updating this country',
            })
          )
        );
      })
    );
  });
}
