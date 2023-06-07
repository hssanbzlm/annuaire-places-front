import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  Observable,
  OperatorFunction,
  Subscription,
  debounceTime,
  map,
} from 'rxjs';
import { Country, continentType } from 'src/app/Interfaces/country';
import { CountryDataService } from 'src/app/services/country-data.service';
@Component({
  selector: 'app-manage-country',
  templateUrl: './manage-country.component.html',
  styleUrls: ['./manage-country.component.css'],
})
export class ManageCountryComponent {
  @Input() country!: Country;
  @Output() manageCountryEvent = new EventEmitter();
  @Input() requestState!: { error: null | string; waiting: boolean };

  continentList: continentType[] = [
    'Africa',
    'America',
    'Antarctica',
    'Asia',
    'Europe',
    'Oceania',
  ];
  updatedCountry!: Country;
  manageCountryForm!: FormGroup;
  submitted = false;
  formChangesSub!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountryDataService
  ) {}
  ngOnInit(): void {
    this.updatedCountry = { ...this.country };
    this.initForm();
    this.formChangesSub = this.manageCountryForm.valueChanges.subscribe((v) => {
      if (this.submitted) this.submitted = false;
    });
  }

  initForm() {
    this.manageCountryForm = this.formBuilder.group({
      name: [this.updatedCountry.name, [Validators.required]],
      continent: [this.updatedCountry.continent, [Validators.required]],
      description: [
        this.updatedCountry.description,
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(35),
          Validators.pattern(/^\w+(\s\w+)*$/),
        ],
      ],
    });
  }
  onSubmit() {
    if (this.manageCountryForm.invalid) {
      return;
    } else {
      const countryValue = this.updatedCountry._id
        ? {
            ...this.manageCountryForm.value,
            _id: this.updatedCountry._id,
          }
        : this.manageCountryForm.value;

      this.manageCountryEvent.emit(countryValue);
      this.submitted = true;
    }
  }

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) => {
    let countries: string[] = [];
    return text$.pipe(
      map((term) => {
        if (term === '') {
          return countries;
        } else {
          this.countryService
            .getCountryByName(term)
            .subscribe((data: string[]) => {
              countries = data;
            });
          return countries;
        }
      })
    );
  };

  ngOnDestroy(): void {
    if (this.formChangesSub) this.formChangesSub.unsubscribe();
  }
}
