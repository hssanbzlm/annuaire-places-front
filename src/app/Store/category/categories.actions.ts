import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/Interfaces/category';

export const loadCategories = createAction('[Categories] Load categories');
export const categoriesLoaded = createAction(
  '[Categories] Categories loaded',
  props<{ categories: Category[] }>()
);
export const updateCategory = createAction(
  '[Categories] Update category',
  props<{ category: Category }>()
);

export const categoryUpdated = createAction(
  '[Categories] Category updated',
  props<{ category: Category }>()
);
export const removeCategory = createAction(
  '[Categories] Remove category',
  props<{ category: Category }>()
);
export const categoryRemoved = createAction(
  '[Categories] Category removed',
  props<{ category: Category }>()
);
export const addCategory = createAction(
  '[Categories] Add category',
  props<{ category: Category }>()
);

export const categoryAdded = createAction(
  '[Categories] Category added',
  props<{ category: Category }>()
);
export const categoryError = createAction(
  '[Categories] Category error',
  props<{ payload: string }>()
);
