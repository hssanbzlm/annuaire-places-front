import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css'],
})
export class ManageCategoryComponent {
  @Input() category: any;
  @Output() manageCategoryEvent = new EventEmitter();
  updatedCategory: any;
  manageCategoryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.updatedCategory = { ...this.category };
    this.initForm();
  }

  initForm() {
    this.manageCategoryForm = this.formBuilder.group({
      title: [
        this.updatedCategory.title,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      type: [
        this.updatedCategory.type,
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
      this.manageCategoryEvent.emit(this.manageCategoryForm.value);
    }
  }
}
