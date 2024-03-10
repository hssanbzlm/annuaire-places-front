import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BasicModalComponent } from 'src/app/shared/components/basic-modal/basic-modal.component';
import { Country } from 'src/app/Interfaces/country';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store';
import {
  selectCountries,
  selectCountriesRequestState,
} from 'src/app/Store/country/countries.selectors';
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
  requestState!: { error: string | null; waiting: boolean };
  submitted = false;

  constructor(private modalService: NgbModal, private store: Store<AppState>) {}
  ngOnInit(): void {
    this.countryList$ = this.store.select(selectCountries);
    this.store.select(selectCountriesRequestState).subscribe((requestState) => {
      this.requestState = requestState;
      if (!requestState.error && !requestState.waiting && this.submitted) {
        this.closeModal();
      }
    });
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
    this.submitted = true;
  }
  handleRemoveCountry() {
    this.store.dispatch(
      CountriesActionsTypes.removeCountry({ country: this.country })
    );
    this.submitted = true;
  }

  handleUpdateCountry(country: Country) {
    this.store.dispatch(CountriesActionsTypes.updateCountry({ country }));
    this.submitted = true;
  }

  handleCancel() {
    this.closeModal();
  }
  closeModal() {
    this.modalRef.close();
    this.submitted = false;
  }
}
