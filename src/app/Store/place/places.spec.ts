import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from '..';
import {
  selectPlacesRequestState,
  numberOfListingParCountry,
  numberOfPlacesParCategory,
  numberOfPlacesParCountry,
} from './places.selectors';
import {
  numberOfListingParCountryHelper,
  numberOfPlacesParCategoryHelper,
  numberOfPlacesParCountryHelper,
} from 'src/app/helpers/helpers';
import { storeData } from '../fake-store-data';
fdescribe('Places ', () => {
  let store: MockStore;

  const initialState: AppState = storeData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideMockStore({ initialState })],
    });
    store = TestBed.inject(MockStore);
  });

  it('should select request state', () => {
    const result = selectPlacesRequestState.projector(initialState.places);
    expect(result.error).toEqual(null);
    expect(result.waiting).toEqual(false);
  });

  it('should count number of places per country ', () => {
    const result = numberOfPlacesParCountry.projector(
      numberOfPlacesParCountryHelper(initialState)
    );
    expect(result).toEqual({
      labels: ['Tunisia', 'Italy'],
      datasets: [{ data: [2, 1] }],
    });
  });

  it('should count number of places per category ', () => {
    const result = numberOfPlacesParCategory.projector(
      numberOfPlacesParCategoryHelper(initialState)
    );
    expect(result).toEqual({
      labels: ['fitness', 'restaurant'],
      datasets: [{ data: [1, 2] }],
    });
  });

  it('should count number of listing par country', () => {
    const result = numberOfListingParCountry.projector(
      numberOfListingParCountryHelper(initialState)
    );

    expect(result).toEqual([
      { country: 'Tunisia', listings: 2 },
      { country: 'Italy', listings: 1 },
    ]);
  });
});
