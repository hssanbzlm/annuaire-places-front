import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BasicModalComponent } from '../../components/basic-modal/basic-modal.component';
import { CountryDataService } from 'src/app/services/country-data.service';
import { Country } from 'src/app/Interfaces/country';
import { Subscription } from 'rxjs';

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
  countryList!: Country[];
  tableColumns = ['name', 'continent', 'description'];
  country!: Country;

  constructor(
    private modalService: NgbModal,
    private countryService: CountryDataService
  ) {}
  ngOnInit(): void {
    this.countryService.getCountries().subscribe(({ data }) => {
      this.countryList = data;
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
    this.countryService.addCountry(country).subscribe(({ data }) => {
      if (data._id) {
        this.countryList.push(data);
        this.closeModal();
      }
    });
  }
  handleRemoveCountry() {
    this.countryService.removeCountry(this.country).subscribe(({ data }) => {
      if (data._id) {
        this.countryList = this.countryList.filter(
          (country) => country._id != data._id
        );
        this.closeModal();
      }
    });
  }

  handleUpdateCountry(country: Country) {
    this.countryService.updateCountry(country).subscribe(({ data }) => {
      if (data._id) {
        this.countryList = this.countryList.map((country) => {
          if (country._id == data._id) return data;
          return country;
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
