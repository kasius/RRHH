import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FastFilterComponent } from './fastfilter.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'fastfilter', component: FastFilterComponent }
    ])
  ],
  exports: [RouterModule]
})
export class FastFilterRoutingModule { }
