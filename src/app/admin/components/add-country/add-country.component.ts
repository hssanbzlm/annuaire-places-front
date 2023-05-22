import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css'],
})
export class AddCountryComponent {
  @Output() addCountryEvent = new EventEmitter();
  addCountryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addCountryForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      continent: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(35),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.addCountryForm.invalid) return;
    else {
      this.addCountryEvent.emit(this.addCountryForm.value);
    }
  }
}
