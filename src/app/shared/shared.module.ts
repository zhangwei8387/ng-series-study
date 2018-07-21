import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// region: third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CodemirrorModule } from 'ng2-codemirror';

const THIRDMODULES = [
  NgZorroAntdModule,
  CodemirrorModule
];
// endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // third libs
    ...THIRDMODULES,
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // third libs
    ...THIRDMODULES
  ],
})
export class SharedModule {}
