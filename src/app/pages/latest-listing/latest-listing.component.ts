import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Place } from 'src/app/Interfaces/place';
import { AppState } from 'src/app/Store';
import { selectPlaces } from 'src/app/Store/place/places.selectors';

@Component({
  selector: 'app-latest-listing',
  templateUrl: './latest-listing.component.html',
  styleUrls: ['./latest-listing.component.css'],
})
export class LatestListingComponent {
  places$!: Observable<Place[]>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.places$ = this.store.select(selectPlaces);
  }
}
