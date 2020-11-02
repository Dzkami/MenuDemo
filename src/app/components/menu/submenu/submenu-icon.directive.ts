import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dz-submenu-icon], dz-submenu-icon',
  // host: {'class': 'menu-icon'}
})
export class MenuIconDirective {
  constructor(public elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(elementRef.nativeElement, 'dz-submenu-icon');
  }
}
