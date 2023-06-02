import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Interfaces/category';
import { AppState } from 'src/app/Store';
import { selectCategories } from 'src/app/Store/category/categories.selectors';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categoryList$!: Observable<Category[]>;
  itemsPerSlide = 3;
  singleSlideOffset = true;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.categoryList$ = this.store.select(selectCategories);
  }
}
