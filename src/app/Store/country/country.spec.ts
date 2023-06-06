import { storeData } from '../fake-store-data';
import { CountriesListShape, countriesReducer } from './countries.reducer';
import * as countriesActions from './countries.actions';
import { Country } from 'src/app/Interfaces/country';
fdescribe('Countries reducer', () => {
  let initialCountriesState: CountriesListShape;
  beforeEach(() => {
    initialCountriesState = storeData.countries;
  });
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = { type: 'unknown' };
      const newState = countriesReducer(initialCountriesState, action);
      expect(newState).toEqual(initialCountriesState);
    });
  });

  describe('Country added action ', () => {
    it('should add to state', () => {
      const newCountry: Country = {
        _id: '177',
        name: 'Spain',
        continent: 'Europe',
        description: 'des',
      };

      expect(initialCountriesState).not.toContain(newCountry);
      const newState = countriesReducer(
        initialCountriesState,
        countriesActions.countryAdded({ country: newCountry })
      );
      expect(newState.countryList).toContain(newCountry);
    });
  });

  describe('Coutry removed action', () => {
    it('should remove country from state', () => {
      const countryToRemove = initialCountriesState.countryList[0];

      const newCountryState = countriesReducer(
        initialCountriesState,
        countriesActions.countryRemoved({ country: countryToRemove })
      );

      expect(newCountryState.countryList).not.toContain(countryToRemove);
    });
  });

  describe('Coutry updated action', () => {
    it('should update country', () => {
      const countryToUpdate = { ...initialCountriesState.countryList[1] };
      countryToUpdate.name = 'Brazil';
      const newCountryState = countriesReducer(
        initialCountriesState,
        countriesActions.countryUpdated({ country: countryToUpdate })
      );

      expect(newCountryState.countryList).toContain(countryToUpdate);
    });
  });
});
