import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BasicModalComponent } from '../../components/basic-modal/basic-modal.component';
import { Category } from 'src/app/Interfaces/category';
import { Store, select } from '@ngrx/store';
import * as CategoriesActionsTypes from '../../../Store/category/categories.actions';
import { Observable } from 'rxjs';
import { AppState, selectCategories } from 'src/app/Store';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  private modalRef!: NgbModalRef;

  category!: Category;
  categoryList$!: Observable<Category[]>;
  tableColumns = ['name'];
  @ViewChild('updateCategoryModal', { read: TemplateRef })
  updateCategoryModal!: TemplateRef<BasicModalComponent>;
  @ViewChild('removeCategoryModal', { read: TemplateRef })
  removeCategoryModal!: TemplateRef<BasicModalComponent>;
  @ViewChild('addCategoryModal', { read: TemplateRef })
  addCategoryModal!: TemplateRef<BasicModalComponent>;

  constructor(private modalService: NgbModal, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.categoryList$ = this.store.pipe(select(selectCategories));
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
    this.store.dispatch(CategoriesActionsTypes.addCategory({ category }));
    this.closeModal();
  }

  handleRemoveCategory() {
    this.store.dispatch(
      CategoriesActionsTypes.removeCategory({ category: this.category })
    );
    this.closeModal();
  }

  handleUpdateCategory(category: Category) {
    this.store.dispatch(CategoriesActionsTypes.updateCategory({ category }));
    this.closeModal();
  }

  handleCancel() {
    this.closeModal();
  }
  closeModal() {
    this.modalRef.close();
  }
}
