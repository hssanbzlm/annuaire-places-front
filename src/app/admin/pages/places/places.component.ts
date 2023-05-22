import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BasicModalComponent } from '../../components/basic-modal/basic-modal.component';

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

  tableData = [
    {
      name: 'Cafe oclock',
      description: 'loremipsumloremipsumloremipsum',
      phone: '222-332-9865-98',
    },
    {
      name: 'california gym',
      description: 'loremipsumloremipsumloremipsum',
      phone: '222-332-9865-98',
    },
  ];
  tableColumns = ['name', 'description', 'phone'];
  data = {};

  constructor(private modalService: NgbModal) {}

  handleAddEvent() {
    this.modalRef = this.modalService.open(this.addPlaceModal);
  }
  handleRemoveEvent(data: any) {
    this.modalRef = this.modalService.open(this.removePlaceModal);
    this.data = data;
  }
  handleUpdateEvent(data: any) {
    this.modalRef = this.modalService.open(this.updatePlaceModal);
    this.data = data;
  }

  handleAddPlace(data: any) {
    console.log('your data is added ', data);
  }
  handleRemovePlace() {
    console.log('this data will be removed ', this.data);
  }

  handleUpdatePlace(data: any) {
    console.log('this data will be updated ', data);
  }

  handleCancel() {
    this.closeModal();
  }
  closeModal() {
    this.modalRef.close();
  }
}
