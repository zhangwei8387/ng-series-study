import { Component, Input } from '@angular/core';
@Component({
    selector:'code-mirror',
    templateUrl: './codemirror.component.html',
    styleUrls: ['./codemirror.component.less']
})
export class CodemirrorComponent {
    @Input() code: string;
    config = {
        lineNumbers: true,
        theme: 'seti',
        readOnly: true,
    };
}
