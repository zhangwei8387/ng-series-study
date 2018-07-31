import { Component } from '@angular/core';
import 'codemirror/mode/javascript/javascript';
@Component({
  selector: 'app-root',
  template: `
  <ngx-loading-bar [color]="'red'" [includeSpinner]="false"></ngx-loading-bar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {}
