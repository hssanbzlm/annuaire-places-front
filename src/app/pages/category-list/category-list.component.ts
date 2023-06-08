import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Category } from 'src/app/Interfaces/category';
import { AppState } from 'src/app/Store';
import {
  selectCategories,
  selectCategoriesRequestState,
} from 'src/app/Store/category/categories.selectors';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categoryList$!: Observable<Category[]>;
  itemsPerSlide = 3;
  singleSlideOffset = true;
  requestState!: { waiting: boolean; error: null | string };
  requestStateSubscription!: Subscription;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.categoryList$ = this.store.select(selectCategories);
    this.requestStateSubscription = this.store
      .select(selectCategoriesRequestState)
      .subscribe((requestState) => {
        this.requestState = requestState;
      });
  }
  ngOnDestroy(): void {
    if (this.requestState) this.requestStateSubscription.unsubscribe();
  }
}
