import { booleanAttribute, Directive, ElementRef, input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uiTitle]',
  standalone: true
})
export class UiTitleDirective implements OnInit {
    readonly hasBackground = input(false, { transform: booleanAttribute });
    readonly size = input<'small' | 'medium' | 'large'>('medium');
    
    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this.el.nativeElement, 'ui-title');
    }

    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.size());
        
        if (this.hasBackground()) {
            this.renderer.addClass(this.el.nativeElement, 'ui-title-with-background');
        } else {
            this.renderer.removeClass(this.el.nativeElement, 'ui-title-with-background');
        }
    }
}
