import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FastFilterComponent } from './fastfilter.component';
import { FastFilterRoutingModule } from './fastfilter-routing.module';

@NgModule({
  imports: [CommonModule, FastFilterRoutingModule],
  declarations: [FastFilterComponent],
  exports: [FastFilterComponent]
})
export class FastFilterModule { }
