import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'child-communication',
    templateUrl: './child-communication.component.html',
    styleUrls: ['./child-communication.component.less']
})
export class ChildCommunicationComponent {
    constructor(private messageService: NzMessageService) { }
    @Input() index: number;
    @Input() childValue1: string;
    childValue2;
    childValue3;
    childValue4;
    childFunction2() {
        this.messageService.info(this.childValue2);
    }
    childFunction3() {
        this.messageService.info(this.childValue3);
    }
    @Output() event = new EventEmitter<any>();
    name = 'Eve';
    bornYear = '1995';
    childFunction4() {
        this.event.emit(
            {
                name: this.name,
                bornYear: this.bornYear
            }
        );
    }
}
