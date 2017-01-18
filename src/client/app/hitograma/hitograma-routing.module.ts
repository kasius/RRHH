import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HitogramaComponent } from './hitograma.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'hitograma', component: HitogramaComponent }
    ])
  ],
  exports: [RouterModule]
})
export class HitogramaRoutingModule { }
