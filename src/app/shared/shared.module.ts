import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSpinnerComponent } from './components/base-spinner/base-spinner.component';

@NgModule({
  declarations: [BaseSpinnerComponent],
  imports: [CommonModule],
  exports: [BaseSpinnerComponent],
})
export class SharedModule {}
