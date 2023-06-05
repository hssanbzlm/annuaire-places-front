import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/Store';
import { numberOfListingParCountry } from 'src/app/Store/place/places.selectors';
import { ListingsParCountry } from 'src/app/Interfaces/chart';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent {
  listingParCountry$!: Observable<ListingsParCountry[]>;
  itemsPerSlide = 3;
  singleSlideOffset = true;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.listingParCountry$ = this.store.select(numberOfListingParCountry);
  }
}
