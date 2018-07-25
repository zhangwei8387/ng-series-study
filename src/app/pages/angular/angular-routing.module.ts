import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectiveComponent } from './directive/directive.component';
import { CreateComponent } from './create/create.component';
import { ConventionalUsageComponent } from './conventional-usage/conventional-usage.component';
import { ComponentCommunicationComponent } from './component/component-communication/component-communication.component';
import { ComponentStylesComponent } from './component/component-styles/component-styles.component';

const routes: Routes = [
  { path: 'directive', component: DirectiveComponent },
  { path: 'create', component: CreateComponent },
  { path: 'conventional-usage', component: ConventionalUsageComponent },
  { path: 'component-communication', component: ComponentCommunicationComponent },
  { path: 'component-styles', component: ComponentStylesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
