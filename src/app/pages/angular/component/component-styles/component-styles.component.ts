import { Component } from '@angular/core';
import { BasicConfigurationService } from '../../../../core/common-configuration.service';

@Component({
    templateUrl: './component-styles.component.html',
    styleUrls: ['./component-styles.component.less']
})
export class ComponentStylesComponent {
    constructor(
        private basicConfigurationService: BasicConfigurationService
    ) {
        this.codemirrorConfig = this.basicConfigurationService.getCodemirrorConfiguration();
    }
    codemirrorConfig;
}
