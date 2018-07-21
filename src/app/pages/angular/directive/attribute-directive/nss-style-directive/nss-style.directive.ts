import { Directive, ElementRef, Renderer, Input, DoCheck } from '@angular/core';

@Directive({
    selector: '[nssStyle]'
})
export class NssStyleDirective implements DoCheck {
    @Input('nssColor') color: string;
    @Input('nssWeight') weight: string;
    @Input('nssSize') size: number;
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer
    ) {
    }
    ngDoCheck() {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'color', this.color);
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'font-weight', this.weight);
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'font-size', this.size + 'px');
    }
}
