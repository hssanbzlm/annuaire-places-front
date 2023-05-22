import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BasicModalComponent } from '../../components/basic-modal/basic-modal.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  private modalRef!: NgbModalRef;
  data: any;
  tableData = [
    { title: 'restaurant', type: 'gg' },
    { title: 'sport', type: 'hh' },
    { title: 'fitness', type: 'f' },
  ];
  tableColumns = ['title', 'type'];
  @ViewChild('updateCategoryModal', { read: TemplateRef })
  updateCategoryModal!: TemplateRef<BasicModalComponent>;
  @ViewChild('removeCategoryModal', { read: TemplateRef })
  removeCategoryModal!: TemplateRef<BasicModalComponent>;
  @ViewChild('addCategoryModal', { read: TemplateRef })
  addCategoryModal!: TemplateRef<BasicModalComponent>;

  constructor(private modalService: NgbModal) {}

  handleRemoveEvent(data: any) {
    this.modalRef = this.modalService.open(this.removeCategoryModal);
    this.data = data;
  }

  handleUpdateEvent(data: any) {
    this.modalRef = this.modalService.open(this.updateCategoryModal);
    this.data = data;
  }
  handleAddEvent() {
    this.modalRef = this.modalService.open(this.addCategoryModal);
  }
  handleAddCategory(data: any) {
    console.log('this is the new category I received ', data);
  }

  handleRemoveCategory() {
    console.log('this item will be removed ', this.data);
  }

  handleUpdateCategory(data: any) {
    console.log('this item will be updated', data);
  }

  handleCancel() {
    this.closeModal();
  }
  closeModal() {
    this.modalRef.close();
    this.data = {};
  }
}
