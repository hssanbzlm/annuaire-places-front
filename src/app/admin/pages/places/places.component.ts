import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BasicModalComponent } from '../../components/basic-modal/basic-modal.component';
import { Place } from 'src/app/Interfaces/place';
import { PlaceDataService } from 'src/app/services/place-data.service';
import { CategoryDataService } from 'src/app/services/category-data.service';
import { CountryDataService } from 'src/app/services/country-data.service';

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

  placeList!: Place[];
  tableColumns = [
    'name',
    'country',
    'city',
    'category',
    'description',
    'phone',
  ];
  countries!: string[];
  categories!: string[];

  place!: Place;

  constructor(
    private modalService: NgbModal,
    private placeService: PlaceDataService,
    private countryService: CountryDataService,
    private categoryService: CategoryDataService
  ) {}
  ngOnInit(): void {
    this.countryService.getCountries().subscribe(({ data }) => {
      this.countries = data.map((country) => country.name);
    });
    this.categoryService.getCategories().subscribe(({ data }) => {
      this.categories = data.map((category) => category.name);
    });
    this.placeService.getPlaces().subscribe(({ data }) => {
      this.placeList = data;
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

  handleAddPlace(data: Place) {
    this.placeService.addPlace(data).subscribe(({ data }) => {
      if (data._id) {
        this.placeList.push(data);
        this.closeModal();
      }
    });
  }
  handleRemovePlace() {
    this.placeService.removePlace(this.place).subscribe(({ data }) => {
      if (data._id) {
        this.placeList = this.placeList.filter(
          (place) => place._id != data._id
        );
        this.closeModal();
      }
    });
  }

  handleUpdatePlace(place: Place) {
    this.placeService.updatePlace(place).subscribe(({ data }) => {
      if (data._id) {
        this.placeList = this.placeList.map((place) => {
          if (place._id == data._id) {
            return data;
          }
          return place;
        });
        this.closeModal();
      }
    });
  }

  handleCancel() {
    this.closeModal();
  }
  closeModal() {
    this.modalRef.close();
  }
}
