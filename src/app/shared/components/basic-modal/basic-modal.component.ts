import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.css'],
})
export class BasicModalComponent {
  @Output() closeEvent = new EventEmitter();

  close() {
    this.closeEvent.emit();
  }
}
