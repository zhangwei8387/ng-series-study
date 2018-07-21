import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LayoutComponent } from './layout.component';
import { LayoutSidebarComponent } from './sidebar/sidebar.component';

const COMPONENTS_DECLARATIONS = [
  LayoutComponent,
  LayoutSidebarComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...COMPONENTS_DECLARATIONS
  ],
  exports: [
    ...COMPONENTS_DECLARATIONS
  ]
})
export class LayoutModule { }
