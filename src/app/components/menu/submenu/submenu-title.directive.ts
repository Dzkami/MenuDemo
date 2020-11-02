import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dz-submenu-title], dz-submenu-title',
  // host: { class: 'dz-submenu-title' },
})
export class SubmenuTitleDirective {
  constructor(public elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(elementRef.nativeElement, 'dz-submenu-title');
  }
}
