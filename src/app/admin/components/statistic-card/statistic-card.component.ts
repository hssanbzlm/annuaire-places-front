import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistic-card',
  templateUrl: './statistic-card.component.html',
  styleUrls: ['./statistic-card.component.css'],
})
export class StatisticCardComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() value!: number | null;
}
