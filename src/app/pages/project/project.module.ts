import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ProjectRoutingModule } from './project-routing.module';

import { IntroductionComponent } from './introduction/introduction.component';

const COMPONENTS_DECLARATIONS = [
    IntroductionComponent,
];
const DIRECTIVE_DECLARATIONS = [

];
const COMPONENTS_ENTRY = [];

@NgModule({
    imports: [
        SharedModule,
        ProjectRoutingModule,
    ],
    declarations: [
        COMPONENTS_DECLARATIONS,
        DIRECTIVE_DECLARATIONS,
        COMPONENTS_ENTRY
    ],
    entryComponents: COMPONENTS_ENTRY
})
export class ProjectModule { }
