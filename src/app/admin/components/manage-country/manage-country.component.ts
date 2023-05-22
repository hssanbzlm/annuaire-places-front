import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-country',
  templateUrl: './manage-country.component.html',
  styleUrls: ['./manage-country.component.css'],
})
export class ManageCountryComponent {
  @Input() country: any;
  @Output() manageCountryEvent = new EventEmitter();

  updatedCountry: any;
  manageCountryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.updatedCountry = { ...this.country };
    this.initForm();
  }

  initForm() {
    this.manageCountryForm = this.formBuilder.group({
      name: [
        this.updatedCountry.name,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      continent: [
        this.updatedCountry.continent,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      description: [
        this.updatedCountry.description,
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
    if (this.manageCountryForm.invalid) {
      return;
    } else {
      this.manageCountryEvent.emit(this.manageCountryForm.value);
    }
  }
}
