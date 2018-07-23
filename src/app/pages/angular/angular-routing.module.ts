import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectiveComponent } from './directive/directive.component';
import { CreateComponent } from './create/create.component';
import { ConventionalUsageComponent } from './conventional-usage/conventional-usage.component';

const routes: Routes = [
  { path: 'directive', component: DirectiveComponent },
  { path: 'create', component: CreateComponent },
  { path: 'conventional-usage', component: ConventionalUsageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
