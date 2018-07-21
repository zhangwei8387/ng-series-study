import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AngularRoutingModule } from './angular-routing.module';

import { DirectiveComponent } from './directive/directive.component';
import { StructuralDirectiveComponent } from './directive/structural-directive/structural-directive-component';
import { AttributeDirectiveComponent } from './directive/attribute-directive/attribute-directive-component';
import { NssMilkTeaDirective } from './directive/structural-directive/nss-milk-tea-directive/milk-tea.directive';
import { NssStyleDirective } from './directive/attribute-directive/nss-style-directive/nss-style.directive';

const COMPONENTS_DECLARATIONS = [
    DirectiveComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent
];
const DIRECTIVE_DECLARATIONS = [
    NssMilkTeaDirective,
    NssStyleDirective
];
const COMPONENTS_ENTRY = [];

@NgModule({
    imports: [
        SharedModule,
        AngularRoutingModule,
    ],
    declarations: [
        COMPONENTS_DECLARATIONS,
        DIRECTIVE_DECLARATIONS,
        COMPONENTS_ENTRY
    ],
    entryComponents: COMPONENTS_ENTRY
})
export class AngularModule { }
