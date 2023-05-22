import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css'],
})
export class AddPlaceComponent {
  @Output() addPlaceEvent = new EventEmitter();
  addPlaceForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addPlaceForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern(/^[A-Za-z]+$/),
        ],
      ],
      phone: ['', [Validators.required]],
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
    if (this.addPlaceForm.invalid) return;
    else {
      this.addPlaceEvent.emit(this.addPlaceForm.value);
    }
  }
}
