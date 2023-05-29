import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryDataService } from 'src/app/services/country-data.service';
import * as CountriesActionsTypes from './countries.actions';
import { map, mergeMap } from 'rxjs';

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
          })
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
          })
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
          })
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
          })
        );
      })
    );
  });
}
