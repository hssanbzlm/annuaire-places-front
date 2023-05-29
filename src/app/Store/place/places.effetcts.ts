import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PlaceDataService } from 'src/app/services/place-data.service';
import * as PlacesActionsTypes from './places.actions';
import { map, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesEffects {
  constructor(
    private actions$: Actions,
    private placeService: PlaceDataService
  ) {}

  loadPlaces$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlacesActionsTypes.loadPlaces),
      mergeMap(() => {
        return this.placeService.getPlaces().pipe(
          map(({ data }) => {
            return {
              type: '[Places] Places loaded',
              places: data,
            };
          })
        );
      })
    );
  });

  addPlace$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlacesActionsTypes.addPlace),
      mergeMap((v) => {
        return this.placeService.addPlace(v.place).pipe(
          map(({ data }) => {
            return {
              type: '[Places] Place added',
              place: data,
            };
          })
        );
      })
    );
  });

  removePlace$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlacesActionsTypes.removePlace),
      mergeMap((v) => {
        return this.placeService.removePlace(v.place).pipe(
          map(({ data }) => {
            return {
              type: '[Places] Place removed',
              place: data,
            };
          })
        );
      })
    );
  });

  updatePlace$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlacesActionsTypes.updatePlace),
      mergeMap((v) => {
        return this.placeService.updatePlace(v.place).pipe(
          map(({ data }) => {
            return {
              type: '[Places] Place updated',
              place: data,
            };
          })
        );
      })
    );
  });
}
