import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent {
  @Input() category: any;
  @Output() updatedCategoryEvent = new EventEmitter();
  updatedCategory: any;
  updateCategoryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.updatedCategory = { ...this.category };
    this.initForm();
  }

  initForm() {
    this.updateCategoryForm = this.formBuilder.group({
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
    if (this.updateCategoryForm.invalid) {
      return;
    } else {
      this.updatedCategoryEvent.emit(this.updatedCategory);
    }
  }
}
