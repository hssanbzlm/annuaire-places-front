import { createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/Interfaces/category';
import * as CategoriesActionsTypes from './categories.actions';

export interface CategoriesStateShape {
  categoryList: Category[];
  error: string | null;
  waiting: boolean;
}

const initialCategoriesState: CategoriesStateShape = {
  categoryList: [],
  error: null,
  waiting: false,
};

export const categoriesReducer = createReducer(
  initialCategoriesState,
  on(CategoriesActionsTypes.loadCategories, (state) => ({
    ...state,
    error: null,
    waiting: true,
  })),
  on(CategoriesActionsTypes.categoriesLoaded, (state, { categories }) => ({
    error: null,
    waiting: false,
    categoryList: [...categories],
  })),
  on(CategoriesActionsTypes.addCategory, (state) => ({
    ...state,
    error: null,
    waiting: true,
  })),
  on(CategoriesActionsTypes.categoryAdded, (state, { category }) => ({
    error: null,
    waiting: false,
    categoryList: [...state.categoryList, category],
  })),
  on(CategoriesActionsTypes.removeCategory, (state) => ({
    ...state,
    error: null,
    waiting: true,
  })),
  on(CategoriesActionsTypes.categoryRemoved, (state, { category }) => ({
    error: null,
    waiting: false,
    categoryList: [
      ...state.categoryList.filter(
        (originalCategory) => category._id != originalCategory._id
      ),
    ],
  })),
  on(CategoriesActionsTypes.updateCategory, (state) => ({
    ...state,
    error: null,
    waiting: true,
  })),
  on(CategoriesActionsTypes.categoryUpdated, (state, { category }) => ({
    error: null,
    waiting: false,
    categoryList: state.categoryList.map((originalCategory) => {
      if (category._id === originalCategory._id) return category;
      return originalCategory;
    }),
  })),
  on(CategoriesActionsTypes.categoryError, (state, { payload }) => ({
    ...state,
    error: payload,
    waiting: false,
  }))
);
