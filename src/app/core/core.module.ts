import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BasicConfigurationService } from './common-configuration/common-configuration.service';

@NgModule({
    providers: [
      BasicConfigurationService
    ]
})
export class CoreModule {}
