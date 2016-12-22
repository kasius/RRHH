import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HappeningComponent } from './happening.component';
import { HappeningRoutingModule } from './happening-routing.module';

@NgModule({
  imports: [CommonModule, HappeningRoutingModule],
  declarations: [HappeningComponent],
  exports: [HappeningComponent]
})
export class HappeningModule { }
