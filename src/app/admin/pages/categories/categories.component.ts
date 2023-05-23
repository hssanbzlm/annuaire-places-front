import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BasicModalComponent } from '../../components/basic-modal/basic-modal.component';
import { CategoryDataService } from 'src/app/services/category-data.service';
import { Category } from 'src/app/Interfaces/category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  private modalRef!: NgbModalRef;

  category!: Category;
  categoryList!: Category[];
  tableColumns = ['name'];
  @ViewChild('updateCategoryModal', { read: TemplateRef })
  updateCategoryModal!: TemplateRef<BasicModalComponent>;
  @ViewChild('removeCategoryModal', { read: TemplateRef })
  removeCategoryModal!: TemplateRef<BasicModalComponent>;
  @ViewChild('addCategoryModal', { read: TemplateRef })
  addCategoryModal!: TemplateRef<BasicModalComponent>;

  constructor(
    private modalService: NgbModal,
    private categoryService: CategoryDataService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(({ data }) => {
      this.categoryList = data;
    });
  }
  handleRemoveEvent(category: Category) {
    this.modalRef = this.modalService.open(this.removeCategoryModal);
    this.category = category;
  }

  handleUpdateEvent(category: Category) {
    this.modalRef = this.modalService.open(this.updateCategoryModal);
    this.category = category;
  }
  handleAddEvent() {
    this.modalRef = this.modalService.open(this.addCategoryModal);
  }
  handleAddCategory(category: Category) {
    this.categoryService.addCategory(category).subscribe(({ data }) => {
      if (data._id) {
        this.categoryList.push(data);
        this.closeModal();
      }
    });
  }

  handleRemoveCategory() {
    this.categoryService.removeCategory(this.category).subscribe(({ data }) => {
      if (data._id) {
        this.categoryList = this.categoryList.filter(
          (category) => category._id != data._id
        );
        this.closeModal();
      }
    });
  }

  handleUpdateCategory(category: Category) {
    this.categoryService.updateCategory(category).subscribe(({ data }) => {
      if (data._id) {
        this.categoryList = this.categoryList.map((category) => {
          if (category._id == data._id) {
            return data;
          }
          return category;
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
