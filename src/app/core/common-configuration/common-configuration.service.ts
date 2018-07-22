import { Injectable } from '@angular/core';

@Injectable()
export class BasicConfigurationService {
    constructor() { }
    getCodemirrorConfiguration() {
        return {
            lineNumbers: true,
            theme: 'seti',
            readOnly: true,
        };
    }
}
