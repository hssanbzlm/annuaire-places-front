import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/Store';
import { numberOfListingParCountry } from 'src/app/Store/place/places.selectors';
import { ListingsParCountry } from 'src/app/Interfaces/chart';
import { selectCountriesRequestState } from 'src/app/Store/country/countries.selectors';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent {
  listingParCountry$!: Observable<ListingsParCountry[]>;
  itemsPerSlide = 3;
  singleSlideOffset = true;
  requestState!: { error: string | null; waiting: boolean };
  requestStateSubscription!: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.listingParCountry$ = this.store.select(numberOfListingParCountry);
    this.requestStateSubscription = this.store
      .select(selectCountriesRequestState)
      .subscribe((requestState) => {
        this.requestState = requestState;
      });
  }
  ngOnDestroy(): void {
    if (this.requestStateSubscription) {
      this.requestStateSubscription.unsubscribe();
    }
  }
}
