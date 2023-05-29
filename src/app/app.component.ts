import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './Store';
import { loadPlaces } from './Store/place/places.actions';
import { loadCountries } from './Store/country/countries.actions';
import { loadCategories } from './Store/category/categories.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'annuaire-places';
  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadCountries());
    this.store.dispatch(loadCategories());
    this.store.dispatch(loadPlaces());
  }
}
