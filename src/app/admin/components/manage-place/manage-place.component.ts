import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-place',
  templateUrl: './manage-place.component.html',
  styleUrls: ['./manage-place.component.css'],
})
export class ManagePlaceComponent {
  @Input() place: any;
  @Output() managePlaceEvent = new EventEmitter();
  updatedPlace: any;
  managePlaceForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.updatedPlace = { ...this.place };
    this.initForm();
  }

  initForm() {
    this.managePlaceForm = this.formBuilder.group({
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
    if (this.managePlaceForm.invalid) {
      return;
    } else {
      this.managePlaceEvent.emit(this.managePlaceForm.value);
    }
  }
}
