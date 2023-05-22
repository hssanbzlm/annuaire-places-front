import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-place',
  templateUrl: './update-place.component.html',
  styleUrls: ['./update-place.component.css'],
})
export class UpdatePlaceComponent {
  @Input() place: any;
  @Output() updatePlaceEvent = new EventEmitter();
  updatedPlace: any;
  updatePlaceForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.updatedPlace = { ...this.place };
    this.initForm();
  }

  initForm() {
    this.updatePlaceForm = this.formBuilder.group({
      name: [
        this.updatedPlace.name,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      description: [
        this.updatedPlace.description,
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(35),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      phone: [this.updatedPlace.phone, [Validators.required]],
    });
  }
  onSubmit() {
    if (this.updatePlaceForm.invalid) {
      return;
    } else {
      this.updatePlaceEvent.emit(this.updatePlaceForm.value);
    }
  }
}
