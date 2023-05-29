import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BasicModalComponent } from '../../components/basic-modal/basic-modal.component';
import { Country } from 'src/app/Interfaces/country';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectCountries } from 'src/app/Store';
import * as CountriesActionsTypes from '../../../Store/country/countries.actions';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent {
  private modalRef!: NgbModalRef;
  @ViewChild('updateCountryModal', { read: TemplateRef })
  updateCountryModal!: TemplateRef<BasicModalComponent>;
  @ViewChild('removeCountryModal', { read: TemplateRef })
  removeCountryModal!: TemplateRef<BasicModalComponent>;
  @ViewChild('addCountryModal', { read: TemplateRef })
  addCountryModal!: TemplateRef<BasicModalComponent>;
  countryList$!: Observable<Country[]>;
  tableColumns = ['name', 'continent', 'description'];
  country!: Country;

  constructor(private modalService: NgbModal, private store: Store<AppState>) {}
  ngOnInit(): void {
    this.countryList$ = this.store.select(selectCountries);
  }

  handleAddEvent() {
    this.modalRef = this.modalService.open(this.addCountryModal);
  }
  handleRemoveEvent(data: any) {
    this.modalRef = this.modalService.open(this.removeCountryModal);
    this.country = data;
  }
  handleUpdateEvent(data: any) {
    this.modalRef = this.modalService.open(this.updateCountryModal);
    this.country = data;
  }

  handleAddCountry(country: Country) {
    this.store.dispatch(CountriesActionsTypes.addCountry({ country }));
    this.closeModal();
  }
  handleRemoveCountry() {
    this.store.dispatch(
      CountriesActionsTypes.removeCountry({ country: this.country })
    );
    this.closeModal();
  }

  handleUpdateCountry(country: Country) {
    this.store.dispatch(CountriesActionsTypes.updateCountry({ country }));
    this.closeModal();
  }

  handleCancel() {
    this.closeModal();
  }
  closeModal() {
    this.modalRef.close();
  }
}
