import { booleanAttribute, Directive, ElementRef, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uiLink]',
  standalone: true
})
export class UiLinkDirective {
    readonly hasBackground = input(false, { transform: booleanAttribute });
    
    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this.el.nativeElement, 'ui-link');
    }
}
