import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryDataService } from 'src/app/services/category-data.service';
import * as CategoriesActionsTypes from './categories.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private categoryService: CategoryDataService
  ) {}

  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoriesActionsTypes.loadCategories),
      mergeMap(() => {
        return this.categoryService.getCategories().pipe(
          map(({ data }) => {
            return {
              type: '[Categories] Categories loaded',
              categories: data,
            };
          }),
          catchError(() =>
            of({
              type: '[Categories] Category error',
              payload: 'Error while loading this category',
            })
          )
        );
      })
    );
  });

  addCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoriesActionsTypes.addCategory),
      mergeMap((v) => {
        return this.categoryService.addCategory(v.category).pipe(
          map(({ data }) => {
            return {
              type: '[Categories] Category added',
              category: data,
            };
          }),
          catchError(() =>
            of({
              type: '[Categories] Category error',
              payload: 'Error while adding this category',
            })
          )
        );
      })
    );
  });

  removeCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoriesActionsTypes.removeCategory),
      mergeMap((v) => {
        return this.categoryService.removeCategory(v.category).pipe(
          map(({ data }) => {
            return {
              type: '[Categories] Category removed',
              category: data,
            };
          }),
          catchError(() =>
            of({
              type: '[Categories] Category error',
              payload: 'Error while removing this category',
            })
          )
        );
      })
    );
  });

  updateCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoriesActionsTypes.updateCategory),
      mergeMap((v) => {
        return this.categoryService.updateCategory(v.category).pipe(
          map(({ data }) => {
            return {
              type: '[Categories] Category updated',
              category: data,
            };
          }),
          catchError(() =>
            of({
              type: '[Categories] Category error',
              payload: 'Error while updating this category',
            })
          )
        );
      })
    );
  });
}
