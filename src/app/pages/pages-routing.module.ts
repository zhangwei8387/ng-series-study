import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// layout
import { LayoutComponent } from '../layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/project/introduction', pathMatch: 'full' },
      { path: 'project', loadChildren: './project/project.module#ProjectModule' },
      { path: 'angular', loadChildren: './angular/angular.module#AngularModule' },
      { path: '**', redirectTo: '/project/introduction', pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
