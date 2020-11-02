import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { SubmenuTitleDirective } from './submenu/submenu-title.directive';
import { MenuIconDirective } from './submenu/submenu-icon.directive';
import { MenuGroupTitleDirective } from './menu-group/menu-group-title.directive';
import { MenuGroupComponent } from './menu-group/menu-group.component';
import { MenuItemDirective } from './menu-item.directive';

@NgModule({
  declarations: [
    MenuComponent,
    SubmenuComponent,
    SubmenuTitleDirective,
    MenuIconDirective,
    MenuGroupTitleDirective,
    MenuGroupComponent,
    MenuItemDirective,
  ],
  imports: [CommonModule],
  exports: [
    MenuComponent,
    SubmenuComponent,
    SubmenuTitleDirective,
    MenuIconDirective,
    MenuGroupTitleDirective,
    MenuGroupComponent,
    MenuItemDirective,
  ],
})
export class MenuModule {}
