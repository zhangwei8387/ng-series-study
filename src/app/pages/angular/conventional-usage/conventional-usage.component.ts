import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    templateUrl: './conventional-usage.component.html',
    styleUrls: ['./conventional-usage.component.less']
})
export class ConventionalUsageComponent {
    constructor(
        private messageService: NzMessageService
    ) {
    }
    templateUrlCode = `
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    `;
    insertCodeHtml = `
    <div id="user-name">
        <!-- 在这里显示用户名 -->
    </div>
    `;
    insertCodeJs = `
    var userName = 'Eve';
    $('#user-name').text(userName)
    `;
    userName = 'Eve';
    insertCodeHtmlInNg = `
    <div id="user-name">
        {{userName}}
    </div>
    `;
    insertCodeTs = `
    userName = 'Eve';
    `;
    byString = '伸手怕犯错,缩手怕错过';
    byObject = { centence: '曾经的意中人,现在的忆中人' };
    byArray = ['这个季节很干净,没有故事也没有你'];
    showDataCodeHtml = `
    <p>{{byString}}</p>
    <p>{{byObject.centence}}</p>
    <p>{{byArray[0]}}</p>
    `;
    showDataCodeTs = `
    byString = '伸手怕犯错,缩手怕错过';
    byObject = { centence: '曾经的意中人,现在的忆中人' };
    byArray = ['这个季节很干净,没有故事也没有你'];
    `;
    templateCode = 'template: <div><p>content</p></div>';
    classCodeHtml = `
    <div class="{{className}}">
        <p>犬夜叉是真爱!</p>
        <p>没有之一!</p>
    </div>
    `;
    classCodeCss = `
    .color{
        color: red;
    }
    `;
    classCodeTs = `
    className = 'color';
    `;
    className = 'color';
    centence = '风铃响,故人归';
    showMsg(value: any) {
        this.messageService.info(value);
    }
    bindCodeHtml = `
    <div>
        <p>案例1:使用模版引用变量(脱离数据源)</p>
        <input style="width:125px;" nz-input #age placeholder="请输入你的年纪">
        <button (click)="showMsg(age.value)" nz-button nzType="primary">弹出模板引用变量的内容</button>
    </div>
    <div>
        <p>案例2:使用固定字符串(从视图到数据源的单向)</p>
        <button (click)="showMsg('事到如今,终于明白我命里没你')" nz-button nzType="primary">弹出默认的内容</button>
    </div>
    <div>
        <p>案例3:使用固定字符串(从数据源到视图的单向)</p>
        <span [ngClass]="className">
            <!-- 这里的ngClass等同于 class="{{className}}" -->
            哪有什么故事,有的只是独角戏.
        </span>
    </div>
    <div>
        <p>案例4:既有单向绑定又有双向绑定</p>
        <input style="width:125px;" nz-input [(ngModel)]="centence" name="centence">
        <button (click)="showMsg(centence)" nz-button nzType="primary">弹出双向绑定的内容</button>
    </div>
    `;
    bindCodeTs = `
    centence = '风铃响,故人归';
    showMsg(value: any) {
        this.messageService.info(value);
    }
    `;
    user = {
        name: 'Eve',
        bornYear: '1995'
    };
    safeCodeHtml = `
    My name is {{user.name}} and I was born in {{user.bornYear}},my lover is {{user?.lover}}
    `;
    safeCodeTs = `
    user = {
        name: 'Eve',
        bornYear: '1995'
    };  
    `;
    sentence = '这个世界其实是公平的';
    code1 = `
    <!--不包含内容的子组件-->
    <child></child>

    <!--包含内容的子组件-->
    <child>
        <p>内容</p>
    </child>
    `;
    code2 = `
    <h1>父组件</h1>
    <input nz-input [(ngModel)]="sentence" name="sentence" class="sentence">
    <stomach>
        <div style="margin-bottom: 14px;">{{sentence}}</div>
        <p>所谓的不公,只是不符合人类社会法则</p>
        <span class="className">却符合因果关系</span>
    </stomach>
    `;
    code3 = `
    <h1>子组件</h1>
    <ng-content></ng-content>
    <ng-content select="p"></ng-content>
    <ng-content select=".className"></ng-content>
    `;
    code4 = `
    我想大声地告诉你:
    <ng-template>
        能够认识你,我已经很开心了.
    </ng-template>
    `;
    code5 = `
    我想大声地告诉你:
    <ng-template [ngIf]="true">
        能够认识你,我已经很开心了.
    </ng-template>
    `;
    code6 = `
    <ng-container>
        <p>小时候刮奖刮出“谢”字还不扔，非要把“谢谢惠顾”都刮的干干净净才舍得放手，和后来太多的事一模一样。</p>
    </ng-container>
    `;
}
