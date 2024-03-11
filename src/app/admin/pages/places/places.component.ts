import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BasicModalComponent } from '../../../shared/components/basic-modal/basic-modal.component';
import { Place } from 'src/app/Interfaces/place';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store';
import { selectCategoriesName } from 'src/app/Store/category/categories.selectors';
import {
  selectPlaces,
  selectPlacesRequestState,
} from 'src/app/Store/place/places.selectors';
import { selectCountriesName } from 'src/app/Store/country/countries.selectors';
import * as PlacesActionsTypes from 'src/app/Store/place/places.actions';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
})
export class PlacesComponent {
  private modalRef!: NgbModalRef;
  @ViewChild('updatePlaceModal', { read: TemplateRef })
  updatePlaceModal!: TemplateRef<BasicModalComponent>;
  @ViewChild('removePlaceModal', { read: TemplateRef })
  removePlaceModal!: TemplateRef<BasicModalComponent>;
  @ViewChild('addPlaceModal', { read: TemplateRef })
  addPlaceModal!: TemplateRef<BasicModalComponent>;

  placeList$!: Observable<Place[]>;
  tableColumns = [
    'name',
    'country',
    'city',
    'description',
    'category',
    'phone',
    'date added',
  ];
  countries$!: Observable<string[]>;
  categories$!: Observable<string[]>;
  requestState!: { error: null | string; waiting: boolean };
  place!: Place;
  submitted = false;
  constructor(private modalService: NgbModal, private store: Store<AppState>) {}
  ngOnInit(): void {
    this.placeList$ = this.store.select(selectPlaces);
    this.categories$ = this.store.select(selectCategoriesName);
    this.countries$ = this.store.select(selectCountriesName);
    this.store.select(selectPlacesRequestState).subscribe((requestState) => {
      this.requestState = requestState;
      if (!requestState.waiting && !requestState.error && this.submitted) {
        this.closeModal();
      }
    });
  }

  handleAddEvent() {
    this.modalRef = this.modalService.open(this.addPlaceModal);
  }
  handleRemoveEvent(data: Place) {
    this.modalRef = this.modalService.open(this.removePlaceModal);
    this.place = data;
  }
  handleUpdateEvent(data: Place) {
    this.modalRef = this.modalService.open(this.updatePlaceModal);
    this.place = data;
  }

  handleAddPlace(data: FormData) {
    this.submitted = true;
    this.store.dispatch(PlacesActionsTypes.addPlace({ place: data }));
  }
  handleRemovePlace() {
    this.submitted = true;
    this.store.dispatch(PlacesActionsTypes.removePlace({ place: this.place }));
  }

  handleUpdatePlace(place: FormData) {
    this.submitted = true;
    this.store.dispatch(PlacesActionsTypes.updatePlace({ place: place }));
  }

  handleCancel() {
    this.closeModal();
  }
  closeModal() {
    this.submitted = false;
    this.modalRef.close();
  }
}
