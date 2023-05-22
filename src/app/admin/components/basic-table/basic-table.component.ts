import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css'],
})
export class BasicTableComponent {
  @Input() tableData!: any[];

  @Input() tableColumns!: string[];

  @Output() onUpdateEvent = new EventEmitter();
  @Output() onRemoveEvent = new EventEmitter();

  onUpdate(data: any) {
    this.onUpdateEvent.emit(data);
  }

  onRemove(data: any) {
    this.onRemoveEvent.emit(data);
  }
}
