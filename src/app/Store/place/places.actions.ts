import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/Interfaces/category';
import { Country } from 'src/app/Interfaces/country';
import { Place } from 'src/app/Interfaces/place';

export const loadPlaces = createAction('[Places] Load places');
export const placesLoaded = createAction(
  '[Places] Places loaded',
  props<{ places: Place[] }>()
);
export const updatePlace = createAction(
  '[Places] Update place',
  props<{ place: Place }>()
);

export const placeUpdated = createAction(
  '[Places] Place updated',
  props<{ place: Place }>()
);
export const removePlace = createAction(
  '[Places] Remove place',
  props<{ place: Place }>()
);
export const placeRemoved = createAction(
  '[Places] Place removed',
  props<{ place: Place }>()
);
export const addPlace = createAction(
  '[Places] Add place',
  props<{ place: Place }>()
);

export const placeAdded = createAction(
  '[Places] Place added',
  props<{ place: Place }>()
);
