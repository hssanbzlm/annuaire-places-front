import { AppState } from '..';
import { createSelector } from '@ngrx/store';
import {
  comparePlaceByDate,
  numberOfListingParCountryHelper,
  numberOfPlacesParCategoryHelper,
  numberOfPlacesParCountryHelper,
} from 'src/app/helpers/helpers';

export const selectPlaces = createSelector(comparePlaceByDate, (result) => {
  return result;
});
export const selectPlacesRequestState = createSelector(
  (state: AppState) => ({
    error: state.places.error,
    waiting: state.places.waiting,
  }),
  (result) => result
);
export const numberOfPlaces = createSelector(
  (state: AppState) => state.places.placeList.length,
  (result) => result
);
export const numberOfPlacesParCountry = createSelector(
  numberOfPlacesParCountryHelper,
  (result) => result
);

export const numberOfPlacesParCategory = createSelector(
  numberOfPlacesParCategoryHelper,
  (result) => result
);

export const numberOfListingParCountry = createSelector(
  numberOfListingParCountryHelper,
  (result) => result
);
