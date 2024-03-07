import { Component, Input } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { selectCountriesName } from 'src/app/Store/country/countries.selectors';
import { selectCategoriesName } from 'src/app/Store/category/categories.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  countries$!: Observable<string[]>;
  categories$!: Observable<string[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.countries$ = this.store.select(selectCountriesName);
    this.categories$ = this.store.select(selectCategoriesName);
  }
}
