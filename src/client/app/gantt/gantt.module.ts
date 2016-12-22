import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttComponent } from './gantt.component';
import { GanttRoutingModule } from './gantt-routing.module';

@NgModule({
  imports: [CommonModule, GanttRoutingModule],
  declarations: [GanttComponent],
  exports: [GanttComponent]
})
export class GanttModule { }
