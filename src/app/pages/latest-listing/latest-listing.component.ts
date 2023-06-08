import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Place } from 'src/app/Interfaces/place';
import { AppState } from 'src/app/Store';
import {
  selectPlaces,
  selectPlacesRequestState,
} from 'src/app/Store/place/places.selectors';

@Component({
  selector: 'app-latest-listing',
  templateUrl: './latest-listing.component.html',
  styleUrls: ['./latest-listing.component.css'],
})
export class LatestListingComponent {
  places$!: Observable<Place[]>;
  itemsPerSlide = 3;
  singleSlideOffset = true;
  requestState!: { waiting: boolean; error: null | string };
  requestStateSubscription!: Subscription;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.places$ = this.store.select(selectPlaces);
    this.requestStateSubscription = this.store
      .select(selectPlacesRequestState)
      .subscribe((requestState) => {
        this.requestState = requestState;
      });
  }

  ngOnDestroy(): void {
    if (this.requestStateSubscription)
      this.requestStateSubscription.unsubscribe();
  }
}
