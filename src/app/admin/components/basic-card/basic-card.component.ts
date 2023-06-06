import { Component, Input } from '@angular/core';

export type cardType = 'bg-info' | 'bg-danger' | 'bg-warning';
@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.css'],
})
export class BasicCardComponent {
  @Input() cardText!: string;
  @Input() cardType!: cardType;
}
