import { booleanAttribute, Directive, ElementRef, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uiButton]',
  standalone: true
})
export class UiButtonDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this.el.nativeElement, 'ui-button');
    }
}
