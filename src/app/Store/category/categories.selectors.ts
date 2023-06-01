import { createSelector } from '@ngrx/store';
import { Category } from 'src/app/Interfaces/category';
import { AppState } from '..';
import { radarChartDataType } from 'src/app/Interfaces/chart';

export const selectCategories = (state: AppState) =>
  state.categories.categoryList;
const categoriesNamesMapper = (state: Category[]) =>
  state.map((category) => category.name);
export const selectCategoriesName = createSelector(
  selectCategories,
  categoriesNamesMapper
);
export const selectCategoriesRequestState = (state: AppState) => ({
  error: state.categories.error,
  waiting: state.categories.waiting,
});
export const numberOfCategories = (state: AppState) =>
  state.categories.categoryList.length;
export const numberOfCategoriesParCountry = (state: AppState) => {
  let result: radarChartDataType = {
    labels: [...state.categories.categoryList.map((c) => c.name)],
    datasets: [{ data: [], label: '' }],
  };
  state.countries.countryList.forEach((country, index) => {
    result.datasets[index] = { label: country.name, data: [] };
    state.categories.categoryList.forEach((category) => {
      let sum = 0;
      state.places.placeList.forEach((place) => {
        if (
          place.category.name == category.name &&
          place.country.name == country.name
        ) {
          sum++;
        }
      });
      result.datasets[index].data.push(sum);
    });
  });
  return result;
};
