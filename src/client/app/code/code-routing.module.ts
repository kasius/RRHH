import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CodeComponent } from './code.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'code', component: CodeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class CodeRoutingModule { }
