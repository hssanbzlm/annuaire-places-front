import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/Store';
import {
  numberOfCategories,
  numberofCategoriesParCountry,
} from 'src/app/Store/category/categories.selectors';

import {
  numberOfPlaces,
  numberOfPlacesParCategory,
  numberOfPlacesParCountry,
} from 'src/app/Store/place/places.selectors';

import { numberOfCountries } from 'src/app/Store/country/countries.selectors';
import { pieChartDataType, radarChartDataType } from 'src/app/Interfaces/chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  numberOfCategories$!: Observable<number>;
  numberOfCountries$!: Observable<number>;
  numberOfPlaces$!: Observable<number>;
  numberOfPlacesParCountry$!: Observable<pieChartDataType>;
  numberOfPlacesParCategory$!: Observable<pieChartDataType>;
  numberOfCategoryParCountry$!: Observable<radarChartDataType>;
  statisticsData!: {
    title: string;
    icon: string;
    value: Observable<number>;
  }[];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.numberOfCountries$ = this.store.select(numberOfCountries);
    this.numberOfCategories$ = this.store.select(numberOfCategories);
    this.numberOfPlaces$ = this.store.select(numberOfPlaces);
    this.numberOfPlacesParCountry$ = this.store.select(
      numberOfPlacesParCountry
    );
    this.numberOfPlacesParCategory$ = this.store.select(
      numberOfPlacesParCategory
    );
    this.numberOfCategoryParCountry$ = this.store.select(
      numberofCategoriesParCountry
    );

    this.statisticsData = [
      {
        title: 'Number of Countries',
        value: this.numberOfCountries$,
        icon: '',
      },
      {
        title: 'Number of Categories',
        value: this.numberOfCategories$,
        icon: '',
      },
      {
        title: 'Number of places',
        value: this.numberOfPlaces$,
        icon: '',
      },
    ];
  }
}
