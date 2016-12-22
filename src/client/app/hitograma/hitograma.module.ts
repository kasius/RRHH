import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HitogramaComponent } from './hitograma.component';
import { HitogramaRoutingModule } from './hitograma-routing.module';

@NgModule({
  imports: [CommonModule, HitogramaRoutingModule],
  declarations: [HitogramaComponent],
  exports: [HitogramaComponent]
})
export class HitogramaModule { }
