import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import {
  async
} from '@angular/core/testing';
import {
  Route
} from '@angular/router';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HappeningComponent } from './happening/happening.component';
import { FastFilterComponent } from './fastfilter/fastfilter.component';
import { CodeComponent } from './code/code.component';
import { GanttComponent } from './gantt/gantt.component';
import { HitogramaComponent } from './hitograma/hitograma.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export function main() {

  describe('App component', () => {

    let config: Route[] = [
      { path: 'dashboard', component: DashboardComponent },
      // { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'happening', component: HappeningComponent },
      { path: 'fastfilter', component: FastFilterComponent },
      { path: 'code', component: CodeComponent },
      { path: 'gantt', component: GanttComponent },
      { path: 'hitograma', component: HitogramaComponent }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterTestingModule.withRoutes(config)],
        declarations: [TestComponent, ToolbarComponent,
          NavbarComponent, AppComponent, AboutComponent],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/dashboard' }
        ]
      });
    });

    it('should build without a problem',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let compiled = fixture.nativeElement;

            expect(compiled).toBeTruthy();
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-app></sd-app>'
})

class TestComponent {
}



