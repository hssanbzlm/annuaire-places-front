import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  @Output() addCategoryEvent = new EventEmitter();
  addCategoryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addCategoryForm = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      type: [
        '',
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
    if (this.addCategoryForm.invalid) return;
    else {
      this.addCategoryEvent.emit(this.addCategoryForm.value);
    }
  }
}
