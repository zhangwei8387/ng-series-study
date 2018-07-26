import { Component, Input } from '@angular/core';
@Component({
    selector:'code-mirror',
    templateUrl: './codemirror.component.html'
})
export class CodemirrorComponent {
    @Input() code: string;
    config = {
        lineNumbers: true,
        theme: 'seti',
        readOnly: true,
    };
}
