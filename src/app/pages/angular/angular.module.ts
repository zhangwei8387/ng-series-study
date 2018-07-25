import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AngularRoutingModule } from './angular-routing.module';

import { DirectiveComponent } from './directive/directive.component';
import { CreateComponent } from './create/create.component';
import { ConventionalUsageComponent } from './conventional-usage/conventional-usage.component';
import { InitPageComponent } from './create/init-page/init-page.component';
import { StructuralDirectiveComponent } from './directive/structural-directive/structural-directive-component';
import { AttributeDirectiveComponent } from './directive/attribute-directive/attribute-directive-component';
import { NssMilkTeaDirective } from './directive/structural-directive/nss-milk-tea-directive/milk-tea.directive';
import { NssStyleDirective } from './directive/attribute-directive/nss-style-directive/nss-style.directive';
import { ComponentCommunicationComponent } from './component/component-communication/component-communication.component';
import { ComponentStylesComponent } from './component/component-styles/component-styles.component';
import { ChildCommunicationComponent } from './component/component-communication/child/child-communication.component';
import { ChildStyles1Component } from './component/component-styles/child/child1/child-styles.component';
import { ChildStyles2Component } from './component/component-styles/child/child2/child-styles.component';
import { ChildStyles3Component } from './component/component-styles/child/child3/child-styles.component';

const COMPONENTS_DECLARATIONS = [
    DirectiveComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    CreateComponent,
    ConventionalUsageComponent,
    InitPageComponent,
    ComponentCommunicationComponent,
    ComponentStylesComponent,
    ChildCommunicationComponent,
    ChildStyles1Component,
    ChildStyles2Component,
    ChildStyles3Component
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
