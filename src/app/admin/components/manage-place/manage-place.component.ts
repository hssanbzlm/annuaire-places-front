import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Place } from 'src/app/Interfaces/place';

@Component({
  selector: 'app-manage-place',
  templateUrl: './manage-place.component.html',
  styleUrls: ['./manage-place.component.css'],
})
export class ManagePlaceComponent {
  @Input() place!: Place;
  @Input() categories!: string[] | null;
  @Input() countries!: string[] | null;
  @Input() requestState!: { error: null | string; waiting: boolean };
  @Output() managePlaceEvent = new EventEmitter();
  updatedPlace!: Place;
  managePlaceForm!: FormGroup;
  submitted = false;
  formChangesSub!: Subscription;
  photos: FileList | null = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.updatedPlace = { ...this.place };
    this.initForm();
    this.formChangesSub = this.managePlaceForm.valueChanges.subscribe((v) => {
      if (this.submitted) this.submitted = false;
    });
  }

  initForm() {
    this.managePlaceForm = this.formBuilder.group({
      name: [
        this.updatedPlace.name,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern(/^\w+(\s\w+)*$/),
        ],
      ],
      country: [this.updatedPlace.country?.name, [Validators.required]],
      city: [this.updatedPlace.city, [Validators.required]],
      category: [this.updatedPlace.category?.name, [Validators.required]],
      description: [
        this.updatedPlace.description,
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(35),
          Validators.pattern(/^\w+(\s\w+)*$/),
        ],
      ],
      phone: [this.updatedPlace.phone, [Validators.required]],
    });
  }
  onFileChanges(e: Event) {
    const target = e.target as HTMLInputElement;
    this.photos = target.files!;
  }
  onSubmit() {
    if (this.managePlaceForm.invalid) {
      return;
    } else {
      const placeValue = this.updatedPlace._id
        ? {
            ...this.managePlaceForm.value,
            _id: this.updatedPlace._id,
          }
        : this.managePlaceForm.value;
      const formData = new FormData();
      for (const [key, value] of Object.entries(placeValue)) {
        formData.set(key, value as string);
      }
      if (this.photos) {
        for (let i = 0; i < this.photos.length; i++)
          formData.append('photos', this.photos[i]);
      }
      this.managePlaceEvent.emit(formData);
      this.submitted = true;
    }
  }
  ngOnDestroy(): void {
    if (this.formChangesSub) this.formChangesSub.unsubscribe();
  }
}
