import { Component, Input } from '@angular/core';

type spinnerType =
  | 'text-primary'
  | 'text-secondary'
  | 'text-danger'
  | 'text-warning';
@Component({
  selector: 'app-base-spinner',
  templateUrl: './base-spinner.component.html',
  styleUrls: ['./base-spinner.component.css'],
})
export class BaseSpinnerComponent {
  @Input() spinnerType!: spinnerType;
}
