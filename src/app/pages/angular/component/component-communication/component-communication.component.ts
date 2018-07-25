import { Component, ViewChild } from '@angular/core';
import { BasicConfigurationService } from '../../../../core/common-configuration.service';
import { ChildCommunicationComponent } from './child/child-communication.component';

@Component({
    templateUrl: './component-communication.component.html',
    styleUrls: ['./component-communication.component.less']
})
export class ComponentCommunicationComponent {
    constructor(
        private basicConfigurationService: BasicConfigurationService
    ) {
        this.codemirrorConfig = this.basicConfigurationService.getCodemirrorConfiguration();
    }
    codemirrorConfig;
    faterCodeHtml = `
    <h1>我是父组件</h1>
    <input nz-input class="input" placeholder="父组件的输入框">
    <child-communication></child-communication>
    `;
    childCodeHtml = `
    <div class="child">
        <h1>我是子组件</h1>
        <input nz-input class="input" placeholder="子组件的输入框">
    </div>
    `;
    childCodeTs = `
    import { Component } from '@angular/core';

    @Component({
        selector: 'child-communication',
        templateUrl: './child-communication.component.html',
        styleUrls: ['./child-communication.component.less']
    })
    
    export class ChildCommunicationComponent {
    }
    `;
    fatherValue1;
    childValue1;
    transferData() {
        this.childValue1 = this.fatherValue1;
    }
    code1 = `
    <h1>我是父组件</h1>
    <input nz-input class="input" [(ngModel)]="fatherValue1" placeholder="父组件的输入框">
    <button (click)="transferData()" nz-button nzType="primary">传值给子组件</button>
    <child-communication [childValue1]="childValue1"></child-communication>
    `;
    code2 = `
    fatherValue1;
    childValue1;
    transferData() {
        this.childValue1 = this.fatherValue1;
    }
    `;
    code3 = `
    <h1>我是子组件</h1>
    <input nz-input class="input" [(ngModel)]="childValue1" name="childValue1" placeholder="子组件的输入框">
    `;
    code4 = `
    @Input() childValue1: string;
    `;
    @ViewChild(ChildCommunicationComponent) private childComponent: ChildCommunicationComponent;
    callChildFunction2() {
        this.childComponent.childFunction2();
    }
    code5 = `
    <h1>我是父组件</h1>
    <button (click)="callChildFunction2()" nz-button nzType="primary">调用子组件方法</button>
    <child-communication></child-communication>
    `;
    code6 = `
    @ViewChild(ChildCommunicationComponent) private childComponent: ChildCommunicationComponent;
    callChildFunction2() {
        this.childComponent.childFunction2();
    }
    `;
    code7 = `
    <h1>我是子组件</h1>
    <input nz-input class="input" [(ngModel)]="childValue2" name="childValue2" placeholder="子组件的输入框">
    <button (click)="childFunction2()" nz-button nzType="primary">调用方法</button>
    `;
    code8 = `
    childValue2;
    childFunction2() {
        this.messageService.info(this.childValue2);
    }
    `;
    code9 = `
    <h1>我是父组件</h1>
    <button (click)="callChildFunction3()" nz-button nzType="primary">调用子组件方法</button>
    <child-communication #child></child-communication>
    `;
    code10 = `
    @ViewChild('child') private childComponent2: ChildCommunicationComponent;
    callChildFunction3() {
        this.childComponent2.childFunction3();
    }
    `;
    code11 = `
    <h1>我是子组件</h1>
    <input nz-input class="input" [(ngModel)]="childValue3" name="childValue3" placeholder="子组件的输入框">
    <button (click)="childFunction3()" nz-button nzType="primary">调用方法</button>
    `;
    code12 = `
    childValue3;
    childFunction3() {
        this.messageService.info(this.childValue3);
    }
    `;
    @ViewChild('child') private childComponent2: ChildCommunicationComponent;
    callChildFunction3() {
        this.childComponent2.childFunction3();
    }
    name;
    bornYear;
    showInfo($event) {
        this.name = $event.name;
        this.bornYear = $event.bornYear;
    }
    code13 = `
    <h1>我是父组件</h1>
    <input nz-input class="input" [(ngModel)]="name" placeholder="姓名">
    <input nz-input class="input" [(ngModel)]="bornYear" placeholder="出生年月">
    <child-communication (event)="showInfo($event)"></child-communication>
    `;
    code14 = `
    name;
    bornYear;
    showInfo($event) {
        this.name = $event.name;
        this.bornYear = $event.bornYear;
    }
    `;
    code15 = `
    <h1>我是子组件</h1>
    <input nz-input class="input" [(ngModel)]="name" name="name" placeholder="姓名">
    <input nz-input class="input" [(ngModel)]="bornYear" name="bornYear" placeholder="出生年月">
    <button (click)="childFunction4()" nz-button nzType="primary">传值给父组件</button>  
    `;
    code16 = `
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
    `;

}
