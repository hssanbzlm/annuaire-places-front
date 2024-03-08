import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSpinnerComponent } from './components/base-spinner/base-spinner.component';
import { BasicModalComponent } from './components/basic-modal/basic-modal.component';
@NgModule({
  declarations: [BaseSpinnerComponent, BasicModalComponent],
  imports: [CommonModule],
  exports: [BaseSpinnerComponent, BasicModalComponent],
})
export class SharedModule {}
