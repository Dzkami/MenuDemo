import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dz-menu-icon], dz-menu-icon',
  // host: {'class': 'menu-icon'}
})
export class MenuIconDirective {
  constructor(public elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(elementRef.nativeElement, 'menu-icon');
  }
}
