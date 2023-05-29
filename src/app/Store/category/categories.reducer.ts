import { createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/Interfaces/category';
import * as CategoriesActionsTypes from './categories.actions';

const initialCategories: Category[] = [];

export const categoriesReducer = createReducer(
  initialCategories,
  on(CategoriesActionsTypes.categoriesLoaded, (state, { categories }) => [
    ...categories,
  ]),
  on(CategoriesActionsTypes.categoryAdded, (state, { category }) => [
    ...state,
    category,
  ]),
  on(CategoriesActionsTypes.categoryRemoved, (state, { category }) =>
    state.filter((originalCategory) => category._id != originalCategory._id)
  ),
  on(CategoriesActionsTypes.categoryUpdated, (state, { category }) =>
    state.map((originalCategory) => {
      if (category._id === originalCategory._id) return category;
      return originalCategory;
    })
  )
);
