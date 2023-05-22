import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css'],
})
export class UpdateCountryComponent {
  @Input() country: any;
  @Output() updatedCountryEvent = new EventEmitter();

  updatedCountry: any;
  updateCountryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.updatedCountry = { ...this.country };
    this.initForm();
  }

  initForm() {
    this.updateCountryForm = this.formBuilder.group({
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
    if (this.updateCountryForm.invalid) {
      return;
    } else {
      this.updatedCountryEvent.emit(this.updateCountryForm.value);
    }
  }
}
