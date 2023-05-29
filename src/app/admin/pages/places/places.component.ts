import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BasicModalComponent } from '../../components/basic-modal/basic-modal.component';
import { Place } from 'src/app/Interfaces/place';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  AppState,
  selectCategoriesName,
  selectCountriesName,
  selectPlaces,
} from 'src/app/Store';
import * as PlacesActionsTypes from '../../../Store/place/places.actions';

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
    'category',
    'description',
    'phone',
  ];
  countries$!: Observable<string[]>;
  categories$!: Observable<string[]>;

  place!: Place;

  constructor(private modalService: NgbModal, private store: Store<AppState>) {}
  ngOnInit(): void {
    this.placeList$ = this.store.select(selectPlaces);
    this.categories$ = this.store.select(selectCategoriesName);
    this.countries$ = this.store.select(selectCountriesName);
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

  handleAddPlace(data: Place) {
    this.store.dispatch(PlacesActionsTypes.addPlace({ place: data }));
    this.closeModal();
  }
  handleRemovePlace() {
    this.store.dispatch(PlacesActionsTypes.removePlace({ place: this.place }));
    this.closeModal();
  }

  handleUpdatePlace(place: Place) {
    this.store.dispatch(PlacesActionsTypes.updatePlace({ place: place }));
    this.closeModal();
  }

  handleCancel() {
    this.closeModal();
  }
  closeModal() {
    this.modalRef.close();
  }
}
