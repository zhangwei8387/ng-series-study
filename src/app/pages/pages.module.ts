import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

const COMPONENTS_DECLARATIONS = [
  
];
const COMPONENTS_ENTRY = [];

@NgModule({
  imports: [
    PagesRoutingModule
  ],
  declarations: [
    ...COMPONENTS_DECLARATIONS,
    ...COMPONENTS_ENTRY
  ],
  entryComponents: COMPONENTS_ENTRY
})
export class PagesModule { }
