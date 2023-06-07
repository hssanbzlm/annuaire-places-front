import { createSelector } from '@ngrx/store';
import { Category } from 'src/app/Interfaces/category';
import { AppState } from '..';
import { numberOfCategoriesParCountry } from 'src/app/helpers/helpers';

export const selectCategories = createSelector(
  (state: AppState) => state.categories.categoryList,
  (result) => result
);

export const selectCategoriesName = createSelector(
  selectCategories,
  (state: Category[]) => state.map((category) => category.name)
);
export const selectCategoriesRequestState = createSelector(
  (state: AppState) => ({
    error: state.categories.error,
    waiting: state.categories.waiting,
  }),
  (result) => result
);

export const numberOfCategories = createSelector(
  (state: AppState) => state.categories.categoryList.length,
  (result) => result
);

export const numberofCategoriesParCountry = createSelector(
  numberOfCategoriesParCountry,
  (result) => result
);
