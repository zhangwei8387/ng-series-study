import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import 'codemirror/mode/javascript/javascript';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  template: `
  <ngx-loading-bar [color]="'red'" [includeSpinner]="false"></ngx-loading-bar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router) {

  }
  ngOnInit() {
    this.router.events
      .pipe(filter(evt => evt instanceof NavigationEnd))
      .subscribe(() => {
        console.log('NavigationEnd');
      });
    this.router.events
      .pipe(filter(evt => evt instanceof NavigationStart))
      .subscribe(() => {
        console.log('NavigationStart');
      });
  }
}
