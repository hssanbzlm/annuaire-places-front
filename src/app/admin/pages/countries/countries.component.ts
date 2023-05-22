import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BasicModalComponent } from '../../components/basic-modal/basic-modal.component';

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

  tableData = [
    {
      name: 'Spain',
      description: 'loremipsumloremipsumloremipsum',
      continent: 'Europe',
    },
    {
      continent: 'Africa',
      description: 'loremipsumloremipsumloremipsum',
      name: 'Tunisia',
    },
  ];
  tableColumns = ['name', 'continent', 'description'];
  data = {};

  constructor(private modalService: NgbModal) {}

  handleAddEvent() {
    this.modalRef = this.modalService.open(this.addCountryModal);
  }
  handleRemoveEvent(data: any) {
    this.modalRef = this.modalService.open(this.removeCountryModal);
    this.data = data;
  }
  handleUpdateEvent(data: any) {
    this.modalRef = this.modalService.open(this.updateCountryModal);
    this.data = data;
  }

  handleAddCountry(data: any) {
    console.log('your data is added ', data);
  }
  handleRemoveCountry() {
    console.log('this data will be removed ', this.data);
  }

  handleUpdateCountry(data: any) {
    console.log('this data will be updated ', data);
  }

  handleCancel() {
    this.closeModal();
  }
  closeModal() {
    this.modalRef.close();
  }
}
