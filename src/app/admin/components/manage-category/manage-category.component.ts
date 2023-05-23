import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/Interfaces/category';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css'],
})
export class ManageCategoryComponent {
  @Input() category!: Category;
  @Output() manageCategoryEvent = new EventEmitter();
  updatedCategory!: Category;
  manageCategoryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.updatedCategory = { ...this.category };
    this.initForm();
  }

  initForm() {
    this.manageCategoryForm = this.formBuilder.group({
      name: [
        this.updatedCategory.name,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
    });
  }
  onSubmit() {
    if (this.manageCategoryForm.invalid) {
      return;
    } else {
      const categoryValue = this.updatedCategory._id
        ? {
            ...this.manageCategoryForm.value,
            _id: this.updatedCategory._id,
          }
        : this.manageCategoryForm.value;
      this.manageCategoryEvent.emit(categoryValue);
    }
  }
}
