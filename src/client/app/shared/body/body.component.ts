import { Component } from '@angular/core';

// Components
import { NavbarComponent } from '../navbar/index';
import { ContentComponent } from '../content/index';

/**
 * This class represents the body bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css'],
  entryComponents:[NavbarComponent,ContentComponent]
})
export class BodyComponent { }
