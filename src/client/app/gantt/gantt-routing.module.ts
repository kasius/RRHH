import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GanttComponent } from './gantt.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'gantt', component: GanttComponent }
    ])
  ],
  exports: [RouterModule]
})
export class GanttRoutingModule { }
