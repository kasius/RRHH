import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HappeningModule } from './happening/happening.module';
import { FastFilterModule } from './fastfilter/fastfilter.module';
import { CodeModule } from './code/code.module';
import { ReportModule } from './report/report.module';
import { GanttModule } from './gantt/gantt.module';
import { HitogramaModule } from './hitograma/hitograma.module';
// import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AboutModule, DashboardModule, HappeningModule, FastFilterModule, CodeModule, ReportModule, GanttModule, HitogramaModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
