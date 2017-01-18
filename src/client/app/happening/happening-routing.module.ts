import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HappeningComponent } from './happening.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'happening', component: HappeningComponent }
    ])
  ],
  exports: [RouterModule]
})
export class HappeningRoutingModule { }
